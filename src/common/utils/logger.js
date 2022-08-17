const loggerProjectName = "express-demo";

class Logger {
  static getInstance() {
    if (this["logger"] == null) {
      this["logger"] = new Logger();
    }
    return this["logger"];
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

module.exports = Logger;
