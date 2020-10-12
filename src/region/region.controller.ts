import {Controller, Get} from '@nestjs/common';
import {Region} from "../_entity/region.entity";
import {RegionService} from "./region.service";

@Controller('region')
export class RegionController {

    constructor(private readonly regionService: RegionService) {
    }

    @Get()
    async getAll(): Promise<Region[]> {
        return this.regionService.getAll();
    }
}
