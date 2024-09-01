import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.model';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'posts', description: 'Get all posts' })
  async findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post', description: 'Get a post by id' })
  async findOne(@Args('id', { type: () => ID, description: 'Id of the post' }) id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post, { name: 'createPost', description: 'Create a new post' })
  async createPost(@Args('createPostInput', { description: 'Input for creating a new post' }) createPostInput: CreatePostInput): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => Post, { name: 'updatePost', description: 'Update an existing post' })
  async updatePost(@Args('updatePostInput', { description: 'Input for updating an existing post' }) updatePostInput: UpdatePostInput): Promise<Post> {
    return this.postsService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post, { name: 'removePost', description: 'Remove a post' })
  async removePost(@Args('id', { type: () => ID, description: 'Id of the post' }) id: string): Promise<Post> {
    return this.postsService.remove(id);
  }
}

