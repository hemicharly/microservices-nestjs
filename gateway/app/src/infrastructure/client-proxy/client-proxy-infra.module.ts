import { Module } from '@nestjs/common';
import { NotificationsClientProxyModule } from '@infrastructure/client-proxy/notifications';

@Module({
  imports: [NotificationsClientProxyModule],
  exports: [NotificationsClientProxyModule],
})
export class ClientProxyInfraModule {}
