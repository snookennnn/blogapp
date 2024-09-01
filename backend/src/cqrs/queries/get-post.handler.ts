import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { PostRepository } from '../../database/post.repository';
import { GetPostQuery } from './get-post.query';
import { Post } from '../entities/post.entity';

@QueryHandler(GetPostQuery)
export class GetPostHandler implements IQueryHandler<GetPostQuery> {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(query: GetPostQuery): Promise<Post> {
    return this.postRepository.findOne(query.id);
  }
}
