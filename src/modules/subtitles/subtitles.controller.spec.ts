import { Test, TestingModule } from '@nestjs/testing';
import { SubtitlesController } from './subtitles.controller';
import { SubtitlesService } from './subtitles.service';

describe('SubtitlesController', () => {
  let controller: SubtitlesController;
  let service: SubtitlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtitlesController],
      providers: [SubtitlesService],
    }).compile();

    service = module.get<SubtitlesService>(SubtitlesService);
    controller = module.get<SubtitlesController>(SubtitlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
