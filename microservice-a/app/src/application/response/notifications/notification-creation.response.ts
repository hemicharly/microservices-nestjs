export class NotificationCreationResponse {
  readonly id: string;
  readonly createdAt: string;

  constructor(id: string, createdAt: string) {
    this.id = id;
    this.createdAt = createdAt;
  }
}
