import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponse } from '@application/web/response/error/error.response';

export function ApiDocGenericPost(value: string, modelType?: Type) {
  return applyDecorators(
    ApiOperation({ summary: `Create a new ${value}` }),
    modelType
      ? ApiCreatedResponse({
          description: `The ${value} successfully created`,
          type: modelType,
        })
      : ApiNoContentResponse({
          description: `The ${value} successfully created`,
        }),
    ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorResponse }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.', type: ErrorResponse }),
    ApiNotFoundResponse({ description: 'Resource Not Found.', type: ErrorResponse }),
    ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorResponse }),
  );
}
