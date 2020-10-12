import { Injectable } from '@nestjs/common';
import {Region} from "../_entity/region.entity";
import {FakeDatabaseService} from "../fake-database/fake-database.service";

@Injectable()
export class RegionService {

    constructor(private readonly fakeDatabaseService: FakeDatabaseService) {
    }

    public async getAll(): Promise<Region[]> {
        return this.fakeDatabaseService.getRegions();
    }
}
