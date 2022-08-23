import morgan from 'morgan';
import FileStreamRotator from 'file-stream-rotator';
import path from 'path';
import fs from 'fs';
import logger from '../common/utils/logger';
import dataTransform from '../common/utils/data-transform';

const logDirectory = path.join(__dirname, '../', 'logger');

// 日志目录初始化
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
export default morgan(
  (tokens, req, res) => {
    const requestInfo = [
      dataTransform.formatDateTime(),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      'body:',
      JSON.stringify(req.body),
      '-',
      tokens['response-time'](req, res),
      'ms'
    ].join(' ');

    logger.info(requestInfo);
    return requestInfo;
  },
  {
    stream: FileStreamRotator.getStream({
      date_format: 'YYYY-MM-DD',
      filename: path.join(logDirectory, '%DATE%.log'),
      frequency: 'daily',
      verbose: false
    })
  }
);
