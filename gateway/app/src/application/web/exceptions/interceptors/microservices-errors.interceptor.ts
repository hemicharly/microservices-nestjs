import { CallHandler, ExecutionContext, HttpException, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomMicroserviceException } from '@application/web/exceptions/custom-microservice.exception';

@Injectable()
export class MicroservicesErrorsInterceptor implements NestInterceptor {
  private readonly logger = new Logger(MicroservicesErrorsInterceptor.name);

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof HttpException) {
          return throwError(err);
        }

        this.logger.error(err);
        return throwError(
          () =>
            new CustomMicroserviceException(
              err?.statusCode || 500,
              err?.errors || [
                {
                  code: '500',
                  message: 'Internal Server Error',
                },
              ],
            ),
        );
      }),
    );
  }
}
