import { NotificationCoreEntity, NotificationCreationCoreEntity } from '@core/domain/entities/notifications';

export namespace NotificationCreationUsecase {
  export const Token = 'NotificationCreationUsecase';

  export interface UseCase {
    execute(entityCore: NotificationCreationCoreEntity): Promise<NotificationCoreEntity>;
  }
}
