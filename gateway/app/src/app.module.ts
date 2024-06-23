import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { ApplicationsModule } from '@application/web/applications.module';

@Module({
  imports: [InfrastructureModule, ApplicationsModule],
})
export class AppModule {}
