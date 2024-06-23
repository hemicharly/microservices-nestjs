import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { CustomBaseException } from '@core/domain/exceptions';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: CustomBaseException | RpcException, host: ArgumentsHost) {
    const errorResponse = {
      statusCode: 500,
      errors: [
        {
          code: 'INTERNAL_SERVICE',
          message: 'Internal Server Error',
        },
      ],
    };

    if (exception instanceof CustomBaseException) {
      errorResponse.statusCode = exception.statusCode;
      errorResponse.errors = exception.errors;
    }

    return super.catch(new RpcException(errorResponse), host);
  }
}
