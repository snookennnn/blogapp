import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../modules/posts/entities/post.entity';

/**
 * Repository for Posts
 *
 * @author SNookenn
 */
@EntityRepository(Post)
export class PostRepository extends Repository<Post> {

  /**
   * Find all posts
   *
   * @returns Promise with Post[]
   */
  async findAll(): Promise<Post[]> {
    return await this.find();
  }

  /**
   * Find a post by id
   *
   * @param id Post id
   * @returns Promise with Post or null
   */
  async findById(id: string): Promise<Post | null> {
    return await this.findOne(id);
  }

  /**
   * Create a new post
   *
   * @param post the post to create
   * @returns Promise with Post
   */
  async create(post: Post): Promise<Post> {
    return await this.save(post);
  }

  /**
   * Update a post
   *
   * @param id Post id
   * @param post the new post data
   * @returns Promise with Post
   */
  async update(id: string, post: Post): Promise<Post> {
    return await this.save({ id, ...post });
  }

  /**
   * Delete a post
   *
   * @param id Post id
   * @returns Promise with void
   */
  async delete(id: string): Promise<void> {
    return await this.delete(id);
  }
}

