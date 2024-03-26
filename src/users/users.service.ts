import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private prisma: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const user = await this.prisma.user.findUnique({ where: { email: createUserDto.email }});
    if(user){
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
    }
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  findFollowers(userId: number) {
    return this.prisma.follow.findMany({
      where: { followingId: userId },
    })
  }

  findFollowings(userId: number) {
    return this.prisma.follow.findMany({
      where: { userId },
    })
  }
}
