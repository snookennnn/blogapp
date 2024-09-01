import { Module } from '@nestjs/common';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';

const gqlModuleOptions: GqlModuleOptions<ApolloDriverConfig> = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  playground: true,
};

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        playground: true,
      }),
    }),
    PostsModule,
  ],
})
export class AppModule {}
