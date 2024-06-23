import { Module } from '@nestjs/common';
import { NotificationsModule } from '@application/controllers/notifications/notifications.module';

@Module({
  imports: [NotificationsModule],
})
export class ApplicationsModule {}
