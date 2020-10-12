import { Module } from '@nestjs/common';
import { FakeDatabaseService } from './fake-database.service';

@Module({
  providers: [FakeDatabaseService],
  exports: [FakeDatabaseService]
})
export class FakeDatabaseModule {}
