export const CodeError = {
  RESOURCE_NOT_FOUND: { code: 'MS_000001', message: 'Resource not found.' },
  RESOURCE_ALREADY_EXISTS: { code: 'MS_000002', message: 'Resource already exists.' },
  INVALID_BETWEEN_DATES: {
    code: 'MS_000003',
    message: 'The start date end date are required. Try again.',
  },
  START_DATE_GREATER_THAN_END_DATE: {
    code: 'MS_000004',
    message: 'The start date cannot be greater than the end date. Try again.',
  },
};
