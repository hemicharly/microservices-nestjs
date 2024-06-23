import { Module } from '@nestjs/common';
import { NotificationRepositoryProvider } from '@core/providers/repositories';
import { NotificationRepositoryProviderImpl } from '@infrastructure/repositories/notifications/impl';

@Module({
  imports: [],
  providers: [
    {
      provide: NotificationRepositoryProvider.Token,
      useClass: NotificationRepositoryProviderImpl,
    },
  ],
  exports: [NotificationRepositoryProvider.Token],
})
export class NotificationsInfraModule {}
