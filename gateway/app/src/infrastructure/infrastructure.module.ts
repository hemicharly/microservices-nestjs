import { Module } from '@nestjs/common';
import { ClientProxyInfraModule } from '@infrastructure/client-proxy';

@Module({
  imports: [ClientProxyInfraModule],
  exports: [ClientProxyInfraModule],
})
export class InfrastructureModule {}
