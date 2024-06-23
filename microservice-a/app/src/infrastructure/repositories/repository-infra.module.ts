import { Module } from '@nestjs/common';
import { NotificationsInfraModule } from '@infrastructure/repositories/notifications/notifications-infra.module';

@Module({
  imports: [NotificationsInfraModule],
  exports: [NotificationsInfraModule],
})
export class RepositoryInfraModule {}
