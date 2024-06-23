import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import * as process from 'node:process';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { CustomValidationPipe } from '@application/exceptions';
import { AllExceptionsFilter } from '@application/exceptions/filters/all-exceptions.filter';
import { LoggingInterceptor } from '@application/interceptors/logging.Interceptor';

const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port,
    },
  } as TcpOptions);

  app.useGlobalInterceptors(new LoggingInterceptor());

  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen();

  Logger.log(`Microservice running on http://localhost:${port} environment: ${process.env.NODE_ENV}`, 'Bootstrap');
}

bootstrap();
