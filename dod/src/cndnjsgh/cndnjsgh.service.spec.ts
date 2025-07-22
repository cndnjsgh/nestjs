import { Test, TestingModule } from '@nestjs/testing';
import { CndnjsghService } from './cndnjsgh.service';

describe('CndnjsghService', () => {
  let service: CndnjsghService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CndnjsghService],
    }).compile();

    service = module.get<CndnjsghService>(CndnjsghService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
