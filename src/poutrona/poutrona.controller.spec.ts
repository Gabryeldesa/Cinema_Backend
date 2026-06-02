import { Test, TestingModule } from '@nestjs/testing';
import { PoutronaController } from './poutrona.controller';
import { PoutronaService } from './poutrona.service';

describe('PoutronaController', () => {
  let controller: PoutronaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoutronaController],
      providers: [PoutronaService],
    }).compile();

    controller = module.get<PoutronaController>(PoutronaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
