import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationCreationRequest {
  @ApiProperty({
    description: 'Message notifications.',
    example: 'Enviando messagem.',
  })
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
