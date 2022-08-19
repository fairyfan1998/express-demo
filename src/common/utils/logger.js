const instance = Symbol('logger#instance');
const loggerProjectName = 'express-demo';

export default class Logger {
  getInstance() {
    if (this[instance] == null) {
      this[instance] = new Logger();
    }
    return this[instance];
  }

  info(message) {
    console.log(`[${loggerProjectName}] ${message}`);
  }

  error(message) {
    console.error(`[${loggerProjectName}]:${message}`);
  }

  warm(message) {
    console.warn(`[${loggerProjectName}]:${message}`);
  }
}
