import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { FakeDatabaseModule } from './fake-database/fake-database.module';

@Module({
  imports: [RegionModule, FakeDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
