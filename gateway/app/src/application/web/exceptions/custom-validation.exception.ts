import { ValidationError } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomValidationException extends HttpException {
  constructor(protected readonly validationErrors: ValidationError[]) {
    super(
      validationErrors.map((el) => {
        return {
          code: 'INVALID_FIELD',
          message: Object.values(el.constraints).join(', '),
        };
      }),
      HttpStatus.BAD_REQUEST,
    );
  }
}
