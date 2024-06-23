import { Module } from '@nestjs/common';
import { NotificationsController } from '@application/controllers/notifications/notifications.controller';
import { NotificationsUsecaseProvidersConfig } from '@application/config/usecases';
import { RepositoryInfraModule } from '@infrastructure/repositories';

@Module({
  imports: [RepositoryInfraModule],
  controllers: [NotificationsController],
  providers: [...NotificationsUsecaseProvidersConfig],
})
export class NotificationsModule {}
