import { Provider, Type } from '@nestjs/common';

export const CreateUsecaseConfig = (token: string, implementation: Type, injectTokens: string[]): Provider => ({
  provide: token,
  useFactory: (...args: any[]) => new implementation(...args),
  inject: injectTokens || [],
});
