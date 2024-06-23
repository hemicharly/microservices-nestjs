import { Provider } from '@nestjs/common';
import { NotificationCreationUsecase } from '@core/usecases/notifications';
import { NotificationCreationUsecaseImpl } from '@core/usecases/notifications/impl';
import { CreateUsecaseConfig } from '@application/config/usecases/abstract';
import { NotificationRepositoryProvider } from '@core/providers/repositories';

export const NotificationsUsecaseProvidersConfig: Provider[] = [CreateUsecaseConfig(NotificationCreationUsecase.Token, NotificationCreationUsecaseImpl, [NotificationRepositoryProvider.Token])];
