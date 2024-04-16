import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
  constructor(private prisma: DatabaseService) {}

  create(createPostDto: any, authorId) {
    return this.prisma.post.create({ data: {
      ...createPostDto,
      author: {
        connect: {
          id: authorId
        }
      }
    } });
  }

  findAll() {
    return this.prisma.post.findMany({
      include:{
        likeUsers: true,
        author: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  findAllWithUserId(userId: number) {
    return this.prisma.post.findMany({ 
      where: { authorId: userId },
      include:{
        likeUsers: true,
        author: true
      }
    });
  }

  // findAllWithUserId(userId: number, skip: number, take: number) {
  //   return this.prisma.post.findMany({ where: { authorId: userId }, skip, take});
  // }

  update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return this.prisma.post.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    if(!post){
      throw new NotFoundException('post not found')
    }
    return this.prisma.post.delete({ where: { id } });
  }

  // 将like反转
  async likePost(postId: number, likerId: number) {
    const post = await this.prisma.postLikes.findUnique({
      where: {
        postId_likerId: {
          postId,
          likerId
        }
      }
    })
    if(post){
      return this.prisma.postLikes.delete({
        where: {
          postId_likerId: {
            postId,
            likerId
          }
        }
      })
    }
    return this.prisma.postLikes.create({
      data: {
        postId,
        likerId
      }
    })
  }
}
