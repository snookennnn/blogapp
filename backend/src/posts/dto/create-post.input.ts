import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  imageUrl?: string;
}
