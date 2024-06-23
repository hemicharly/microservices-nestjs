import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json({ errors: exception.getResponse() });
      return;
    }

    this.logger.error(exception);

    response.status(500).json({
      errors: [
        {
          code: 'INTERNAL_SERVICE',
          message: 'Internal Server Error',
        },
      ],
    });
  }
}
