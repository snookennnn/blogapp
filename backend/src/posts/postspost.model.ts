import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType<Post, 'id' | 'title' | 'description' | 'content' | 'imageUrl'>()
export class Post {
  @Field(() => ID, { description: 'Unique identifier for the post' })
  readonly id: string;

  @Field({ description: 'Title of the post' })
  readonly title: string;

  @Field({ description: 'Short description of the post' })
  readonly description: string;

  @Field({ description: 'Full content of the post' })
  readonly content: string;

  @Field(() => String, { description: 'URL of the image associated with the post', nullable: true })
  readonly imageUrl?: string | null;
}

