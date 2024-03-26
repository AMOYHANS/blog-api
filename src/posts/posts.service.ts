import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
  constructor(private prisma: DatabaseService) {}

  create(createPostDto: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data: createPostDto });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return this.prisma.post.update({ where: { id }, data: updatePostDto });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }

  // 将like反转
  async likePost(postId: number, userId: number) {
    const singleLike = await this.prisma.postLikes.findFirst({
      where: {
        AND: [
          { likerId: userId },
          { postId}
        ]
      },
    })
    if(singleLike){
      return this.prisma.postLikes.update({
        where:{
          id: singleLike.id
        },
        data:{
          isLike: !singleLike.isLike
        }
      })
    }else{
      return this.prisma.postLikes.create({
        data:{
          likerId: userId,
          postId: postId,
        }
      })
    }
  }
}
