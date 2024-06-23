import { NotificationCoreEntity } from '@core/domain/entities/notifications';
import { v4 as uuid } from 'uuid';
import { NotificationEntity } from '@infrastructure/repositories/notifications/entity';

export class NotificationInfraMapper {
  public static toDbEntity(entityCore: NotificationCoreEntity): NotificationEntity {
    if (!entityCore) {
      return null;
    }

    const dbEntity = new NotificationEntity();
    dbEntity.id = uuid();
    dbEntity.message = entityCore.message;
    dbEntity.createdAt = new Date().toJSON();
    dbEntity.updatedAt = new Date().toJSON();
    return dbEntity;
  }

  public static toCoreEntity(entity: NotificationEntity): NotificationCoreEntity {
    if (!entity) {
      return null;
    }

    const coreEntity = new NotificationCoreEntity();
    coreEntity.id = entity.id;
    coreEntity.message = entity.message;
    coreEntity.createdAt = entity.createdAt;
    coreEntity.updatedAt = entity.updatedAt;
    return coreEntity;
  }
}
