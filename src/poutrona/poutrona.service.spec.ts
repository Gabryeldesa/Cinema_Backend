import { Test, TestingModule } from '@nestjs/testing';
import { PoutronaService } from './poutrona.service';

describe('PoutronaService', () => {
  let service: PoutronaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoutronaService],
    }).compile();

    service = module.get<PoutronaService>(PoutronaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
