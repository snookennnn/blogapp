import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '../../src/modules/posts/posts.controller';
import { PostsService } from '../../src/modules/posts/posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: {
            createPost: jest.fn(),
            findAll: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should create a post', async () => {
    const createPostDto = { title: 'Test', description: 'Desc', content: 'Content' };
    await controller.create(createPostDto);
    expect(service.createPost).toHaveBeenCalledWith(createPostDto.title, createPostDto.description, createPostDto.content);
  });

  it('should return an array of posts', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([]);
  });

  // Дополнительные тесты...
});
