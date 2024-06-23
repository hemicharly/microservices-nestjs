import { NotificationCoreEntity, NotificationCreationCoreEntity } from '@core/domain/entities/notifications';
import { NotificationCreationUsecase } from '@core/usecases/notifications';
import { NotificationRepositoryProvider } from '@core/providers/repositories';

export class NotificationCreationUsecaseImpl implements NotificationCreationUsecase.UseCase {
  constructor(private readonly repositoryProvider: NotificationRepositoryProvider.RepositoryProvider) {}

  public async execute(entityCore: NotificationCreationCoreEntity): Promise<NotificationCoreEntity> {
    console.log(entityCore);
    const notificationCoreEntity = NotificationCreationCoreEntity.toNotificationCoreEntity(entityCore);
    return await this.repositoryProvider.save(notificationCoreEntity);
  }
}
