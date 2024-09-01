import { Injectable } from '@nestjs/common';
import { Post } from './post.model';
import { v4 as uuidv4 } from 'uuid';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: string): Post {
    return this.posts.find(post => post.id === id);
  }

  create(createPostInput: CreatePostInput): Post {
    const newPost: Post = {
      id: uuidv4(),
      ...createPostInput,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: string, updatePostInput: UpdatePostInput): Post {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostInput };
      return this.posts[postIndex];
    }
    return null;
  }

  remove(id: string): Post {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      const removedPost = this.posts.splice(postIndex, 1);
      return removedPost[0];
    }
    return null;
  }
}
