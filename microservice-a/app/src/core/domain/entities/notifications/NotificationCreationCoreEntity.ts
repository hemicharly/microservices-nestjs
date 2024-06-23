import { NotificationCoreEntity } from '@core/domain/entities/notifications/NotificationCoreEntity';

export class NotificationCreationCoreEntity {
  readonly message: string;

  constructor(message: string) {
    this.message = message;
  }

  public static toNotificationCoreEntity(entityCore: NotificationCreationCoreEntity): NotificationCoreEntity {
    const entity = new NotificationCoreEntity();
    entity.message = entityCore.message;
    return entity;
  }
}
