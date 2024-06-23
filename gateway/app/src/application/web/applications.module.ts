import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HealthAppModule } from '@application/web/controllers/health/health-app.module';
import { NotificationsAppModule } from '@application/web/controllers/notifications/notifications-app.module';
import { LoggingMiddleware } from '@application/web/middleware/logger/logging-middleware';

@Module({
  imports: [HealthAppModule, NotificationsAppModule],
})
export class ApplicationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
