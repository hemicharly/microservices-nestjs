import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomMicroserviceException extends HttpException {
  constructor(statusCode: HttpStatus, error: any) {
    super(error, statusCode);
  }
}
