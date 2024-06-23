import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationCreationRequest } from '@application/web/request/notifications/notification-creation.request';
import { NotificationsProxyService } from '@infrastructure/client-proxy/notifications/notifications-proxy.service';
import { NotificationCreationResponse } from '@application/web/response/notifications/notification-creation.response';
import { ApiDocGenericPost } from '@application/web/config/swagger/decorators';

@ApiTags('Notifications')
@Controller('v1/notifications')
export class NotificationsController {
  @Inject()
  private readonly notificationsProxyService: NotificationsProxyService.ProxyService;

  @Post('send')
  @ApiDocGenericPost('notifications', NotificationCreationResponse)
  @HttpCode(201)
  async sendNotification(@Body() notificationCreationRequest: NotificationCreationRequest): Promise<NotificationCreationResponse> {
    return await this.notificationsProxyService.createNotification(notificationCreationRequest);
  }
}
