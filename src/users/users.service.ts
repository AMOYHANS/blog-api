import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { DatabaseService } from 'src/database/database.service';
const scrypt = promisify(_scrypt);

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

  async find(email: string){
    return this.prisma.user.findMany({ where: { email } })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    if(!id){
      return null
    }
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if(updateUserDto.password){
      updateUserDto.password = await this.hashPassword(updateUserDto.password as string)
    }
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

  async hashPassword(password: string) {
    const salt = randomBytes(8).toString('hex')
    const hash = (await scrypt(password, salt, 32)) as Buffer
    const result = salt + '.' + hash.toString('hex')
    return result
  }
}
