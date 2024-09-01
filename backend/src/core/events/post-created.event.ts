export class PostCreatedEvent {
    constructor(
      public readonly postId: string,
      public readonly title: string,
    ) {}
  }
  