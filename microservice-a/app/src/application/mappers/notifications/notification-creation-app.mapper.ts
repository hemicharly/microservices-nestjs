import { NotificationCreationRequest } from '@application/request/notifications';
import { NotificationCoreEntity, NotificationCreationCoreEntity } from '@core/domain/entities/notifications';
import { NotificationCreationResponse } from '@application/response/notifications';

export class NotificationCreationAppMapper {
  public static fromApi(object: NotificationCreationRequest): NotificationCreationCoreEntity {
    return new NotificationCreationCoreEntity(object.message);
  }

  public static toApi(entity: NotificationCoreEntity): NotificationCreationResponse {
    return new NotificationCreationResponse(entity.id, entity.createdAt);
  }
}
