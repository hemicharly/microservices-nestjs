import { applyDecorators, Type } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorResponse } from '@application/web/response/error/error.response';

export function ApiDocGenericGetPagination(value: string, modelType: Type) {
  return applyDecorators(
    ApiOperation({ summary: `Return all from ${value} with pagination.` }),
    ApiOkResponse({
      description: `Returns all data from ${value} with pagination.`,
      type: modelType,
      isArray: true,
    }),
    ApiBadRequestResponse({ description: 'Bad Request.', type: ErrorResponse }),
    ApiUnauthorizedResponse({ description: 'Unauthorized.', type: ErrorResponse }),
    ApiInternalServerErrorResponse({ description: 'Internal server error.', type: ErrorResponse }),
  );
}
