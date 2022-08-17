const Logger = require("./logger");
const DataTransform = require("./data-transform");
exports.logger = Logger.getInstance();
exports.dataTransform = new DataTransform();
