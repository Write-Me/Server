import { Injectable } from '@nestjs/common';
import {promises as fs} from "fs";
import {FakeDatabase} from "./interface/fake-database.interface";
import {Region} from "../_entity/region.entity";

@Injectable()
export class FakeDatabaseService {

    private static async get(): Promise<FakeDatabase> {
        try {
            const path = __dirname + '/../../' + '/fake-data-base.json';
            return JSON.parse(await fs.readFile(path, 'utf8'));
        } catch (e) {
            throw e;
        }
    }

    public async getRegions(): Promise<Region[]> {
        try {
            const db = await FakeDatabaseService.get();
            return db.regions;
        } catch (e) {
            throw e;
        }
    }
}
