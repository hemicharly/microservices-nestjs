import { NotificationRepositoryProvider } from '@core/providers/repositories';
import { Injectable } from '@nestjs/common';
import { NotificationCoreEntity } from '@core/domain/entities/notifications';
import { NotificationInfraMapper } from '@infrastructure/repositories/notifications/mappers';
import { NotificationEntity } from '@infrastructure/repositories/notifications/entity';

@Injectable()
export class NotificationRepositoryProviderImpl implements NotificationRepositoryProvider.RepositoryProvider {
  public async save(entityCore: NotificationCoreEntity): Promise<NotificationCoreEntity> {
    console.log(entityCore);
    const entity = NotificationInfraMapper.toDbEntity(entityCore);
    /*TODO: Save database*/
    return NotificationInfraMapper.toCoreEntity(entity);
  }

  public async findById(id: string): Promise<NotificationCoreEntity> {
    console.log(id);
    /*TODO: Find database*/
    const entity = new NotificationEntity();
    return NotificationInfraMapper.toCoreEntity(entity);
  }
}
