import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { HttpExceptionFilter } from '@application/web/exceptions/filters';
import { CustomValidationPipe } from '@application/web/exceptions';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as compression from 'compression';
import * as process from 'node:process';
import helmet from 'helmet';
import { SetupRedoc, SwaggerDoc } from '@application/web/config/swagger';
import { MicroservicesErrorsInterceptor } from '@application/web/exceptions/interceptors/microservices-errors.interceptor';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  SwaggerDoc(app);
  SetupRedoc(app);

  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalInterceptors(new MicroservicesErrorsInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ limit: '20mb', extended: true }));
  app.use(helmet());
  app.use(compression());

  await app.listen(port, '0.0.0.0');

  Logger.log(`Server gateway running on http://localhost:${port} environment: ${process.env.NODE_ENV}`, 'Bootstrap');
}

bootstrap();
