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
          return throwError(() => err);
        }

        if (err.statusCode && err.errors) {
          return throwError(() => new CustomMicroserviceException(err.statusCode, err?.errors));
        }

        this.logger.error(err);

        return throwError(
          () =>
            new CustomMicroserviceException(500, [
              {
                code: '500',
                message: 'Internal Server Error',
              },
            ]),
        );
      }),
    );
  }
}
