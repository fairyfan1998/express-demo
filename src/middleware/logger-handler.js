const fs = require("fs");
const path = require("path");
const FileStreamRotator = require("file-stream-rotator");
const morgan = require("morgan");
const { dataTransform, logger } = require("../common/utils");
const logDirectory = path.join(__dirname, "run-logger");

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = FileStreamRotator.getStream({
  date_format: "YYYYMMDD",
  filename: path.join(logDirectory, "access-%DATE%.log"),
  frequency: "daily",
  verbose: false
});

function formatLogger(tokens, req, res) {
  const requestInfo = [
    dataTransform.formatDateTime(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "body参数:",
    JSON.stringify(req.body)
  ].join(" ");
  logger.info(requestInfo);
  return requestInfo;
}

exports.loggerHandler = morgan(formatLogger, {
  stream: accessLogStream
});
