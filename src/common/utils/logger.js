const loggerProjectName = 'express-demo';

export default {
  info(message) {
    console.log(`[${loggerProjectName}] ${message}`);
  },

  error(message) {
    console.error(`[${loggerProjectName}]:${message}`);
  },

  warm(message) {
    console.warn(`[${loggerProjectName}]:${message}`);
  }
};
