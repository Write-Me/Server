import { Test, TestingModule } from '@nestjs/testing';
import { FakeDatabaseService } from './fake-database.service';

describe('FakeDatabaseService', () => {
  let service: FakeDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeDatabaseService],
    }).compile();

    service = module.get<FakeDatabaseService>(FakeDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
