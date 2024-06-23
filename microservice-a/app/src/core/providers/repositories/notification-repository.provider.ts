import { NotificationCoreEntity } from '@core/domain/entities/notifications';

export namespace NotificationRepositoryProvider {
  export const Token = 'NotificationRepositoryProvider';

  export interface RepositoryProvider {
    save(entityCore: NotificationCoreEntity): Promise<NotificationCoreEntity>;

    findById(id: string): Promise<NotificationCoreEntity>;
  }
}
