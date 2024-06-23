import { Module } from '@nestjs/common';
import { RepositoryInfraModule } from '@infrastructure/repositories/repository-infra.module';
import { IntegrationInfraModule } from '@infrastructure/integrations/integration-infra.module';

@Module({
  imports: [RepositoryInfraModule, IntegrationInfraModule],
})
export class InfrastructureModule {}
