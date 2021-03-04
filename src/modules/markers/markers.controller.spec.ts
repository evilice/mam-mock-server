import { Test, TestingModule } from '@nestjs/testing';
import { MarkersController } from './markers.controller';
import { MarkersService } from './markers.service';

describe('MarkersController', () => {
  let controller: MarkersController;
  let service: MarkersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarkersController],
      providers: [MarkersService],
    }).compile();

    service = module.get<MarkersService>(MarkersService);
    controller = module.get<MarkersController>(MarkersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
