import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import {FakeDatabaseModule} from "../fake-database/fake-database.module";

@Module({
  imports: [FakeDatabaseModule],
  providers: [RegionService],
  controllers: [RegionController]
})
export class RegionModule {}
