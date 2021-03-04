import { Test, TestingModule } from '@nestjs/testing';
import { StoragesController } from './storages.controller';
import { StoragesService } from './storages.service';

describe('StoragesController', () => {
  let controller: StoragesController;
  let service: StoragesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoragesController],
      providers: [StoragesService],
    }).compile();

    service = module.get<StoragesService>(StoragesService);
    controller = module.get<StoragesController>(StoragesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
