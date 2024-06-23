import { Module } from '@nestjs/common';
import { NotificationsProxyService } from '@infrastructure/client-proxy/notifications/notifications-proxy.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as process from 'node:process';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NotificationsProxyService.Token,
        transport: Transport.TCP,
        options: {
          host: process.env.MS_NOTIFICATIONS_HOST,
          port: parseInt(process.env.MS_NOTIFICATIONS_PORT),
        },
      },
    ]),
  ],
  providers: [NotificationsProxyService.ProxyService],
  exports: [NotificationsProxyService.ProxyService],
})
export class NotificationsClientProxyModule {}
