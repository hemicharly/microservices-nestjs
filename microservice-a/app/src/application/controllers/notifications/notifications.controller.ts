import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NotificationCreationRequest } from '@application/request/notifications';
import { NotificationCreationResponse } from '@application/response/notifications';
import { NotificationCreationUsecase } from '@core/usecases/notifications';
import { NotificationCreationAppMapper } from '@application/mappers/notifications';

@Controller()
export class NotificationsController {
  @Inject(NotificationCreationUsecase.Token)
  private readonly notificationCreationUsecase: NotificationCreationUsecase.UseCase;

  @MessagePattern('notification_create')
  public async create(notificationCreationRequest: NotificationCreationRequest): Promise<NotificationCreationResponse> {
    const entityCore = NotificationCreationAppMapper.fromApi(notificationCreationRequest);
    const notificationCoreEntity = await this.notificationCreationUsecase.execute(entityCore);
    return NotificationCreationAppMapper.toApi(notificationCoreEntity);
  }
}
