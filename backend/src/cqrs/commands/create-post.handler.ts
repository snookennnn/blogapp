import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PostRepository } from '../../database/post.repository';
import { CreatePostCommand } from './create-post.command';
import { Post } from '../entities/post.entity';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(command: CreatePostCommand): Promise<Post> {
    const { title, description, content, imageUrl } = command;
    const post = new Post();
    post.title = title;
    post.description = description;
    post.content = content;
    post.imageUrl = imageUrl;
    return this.postRepository.save(post);
  }
}
