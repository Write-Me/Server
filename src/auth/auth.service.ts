import { Injectable } from '@nestjs/common';
import {User, UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

export interface AuthPayload {
    id: number;
    email: string;
}

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    private static toAuthPayload(user: User): AuthPayload {
        return {
            id: user.id,
            email: user.email,
        };
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        return {
            access_token: this.jwtService.sign(AuthService.toAuthPayload(user)),
        };
    }
}
