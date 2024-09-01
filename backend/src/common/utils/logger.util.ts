import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';

export class Logger implements LoggerService {
  private readonly logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
