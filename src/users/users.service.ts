import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    // private users: any[] = [
    //     {
    //         id: 1,
    //         name: 'John Doe',
    //         email: 'john.doe@example.com'
    //     },
    //     {
    //         id: 2,
    //         name: 'Jane Smith',
    //         email: 'jane.smith@example.com'
    //     },
    //     {
    //         id: 3,
    //         name: 'Alice Johnson',
    //         email: 'alice.johnson@example.com'
    //     }
    // ]
    async getUsers() {
        //return this.users;
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        // this.users.push({
        //     ...user,
        //     id: this.users.length + 1,
        // });
        
        // return {
        //     ...this.users,
        // }

        //Con prisma
        return this.prisma.user.create({ data: user });
    }
}
