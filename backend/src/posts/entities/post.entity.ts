import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  imageUrl?: string;
}
