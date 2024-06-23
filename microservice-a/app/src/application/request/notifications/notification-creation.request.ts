import { IsNotEmpty, IsString } from 'class-validator';

export class NotificationCreationRequest {
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
