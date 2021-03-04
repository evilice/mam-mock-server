import { Test, TestingModule } from '@nestjs/testing';
import { StoragesService } from './storages.service';

describe('StoragesService', () => {
  let service: StoragesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoragesService],
    }).compile();

    service = module.get<StoragesService>(StoragesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('create directroy', async () => {
  //   const addDirectorySpy = jest.spyOn(service, 'addDirectory');
  //   const isCreated = await service.addDirectory('', 'test');

  //   expect(addDirectorySpy).toBeCalledTimes(1);
  // });

  // it('create tree', async () => {
  //   await service.addDirectory('', 'sp');
  //   await service.addDirectory('sp', '2021');
  //   await service.addDirectory('sp/2021', 'img');

  //   const content = await service.getContent('sp/2021/img');
  //   expect(content).toBeDefined();
  // });

  it('remove directory', async () => {
    await service.addDirectory('', 'level-1');
    await service.addDirectory('level-1', 'level-2');
    const created = await service.getContent('level-1');
    expect(created).toBeDefined();

    await service.remove('level-1');

    // const dir = await service.getContent('level-1/level-2');
    // expect(dir).toBeDefined();
  });
});
