import DataTransform from './data-transform';
import Logger from './logger';
import DataResponse from './data-response';

export const logger = new Logger().getInstance();
export const dataTransform = new DataTransform();
export const dataResponse = new DataResponse();
