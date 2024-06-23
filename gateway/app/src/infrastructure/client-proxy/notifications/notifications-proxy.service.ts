import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export namespace NotificationsProxyService {
  export const Token = 'MICROSERVICE_NOTIFICATIONS';

  @Injectable()
  export class ProxyService {
    constructor(@Inject(NotificationsProxyService.Token) private readonly clientProxy: ClientProxy) {}

    public async createNotification(requestBody: any): Promise<any> {
      return await firstValueFrom(this.clientProxy.send('notification_create', requestBody));
    }
  }
}
