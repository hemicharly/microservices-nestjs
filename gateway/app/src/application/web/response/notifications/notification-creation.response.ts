import { ApiProperty } from '@nestjs/swagger';

export class NotificationCreationResponse {
  @ApiProperty({
    description: 'ID message notifications.',
    example: '123456.',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Created at message notifications.',
    format: 'date-time',
  })
  readonly createdAt: string;
}
