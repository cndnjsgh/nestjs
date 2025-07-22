import { Test, TestingModule } from '@nestjs/testing';
import { CndnjsghController } from './cndnjsgh.controller';

describe('CndnjsghController', () => {
  let controller: CndnjsghController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CndnjsghController],
    }).compile();

    controller = module.get<CndnjsghController>(CndnjsghController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
