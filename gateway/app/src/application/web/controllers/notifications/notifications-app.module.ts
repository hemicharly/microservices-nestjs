import { Module } from '@nestjs/common';
import { NotificationsController } from 'src/application/web/controllers/notifications';
import { NotificationsClientProxyModule } from '@infrastructure/client-proxy/notifications';

@Module({
  imports: [NotificationsClientProxyModule],
  controllers: [NotificationsController],
})
export class NotificationsAppModule {}
