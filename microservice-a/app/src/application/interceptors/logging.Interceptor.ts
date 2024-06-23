import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { RpcException, TcpContext } from '@nestjs/microservices';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToRpc();
    const pattern = ctx.getContext<TcpContext>().getPattern();
    const data = ctx.getData();
    const startTime: [number, number] = process.hrtime();

    return next.handle().pipe(
      tap((response) => {
        this.logger.log(
          JSON.stringify({
            pattern,
            requestBody: data,
            responseBody: response,
            duration: this.elapsedTime(startTime),
          }),
        );
      }),
      catchError((err) => {
        const responseBody = err instanceof RpcException ? err.getError() : err;
        this.logger.error(
          JSON.stringify({
            pattern,
            requestBody: data,
            responseBody,
            duration: this.elapsedTime(startTime),
          }),
        );
        return throwError(err);
      }),
    );
  }

  private elapsedTime(startTime: [number, number]): number {
    const elapsedHrTime: [number, number] = process.hrtime(startTime);
    const elapsedTimeMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    return parseFloat(elapsedTimeMs.toFixed(3));
  }
}
