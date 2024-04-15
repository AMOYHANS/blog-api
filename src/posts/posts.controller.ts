import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAllWithUserId(@Query('userId') userId: number) {
    if(userId)
    return this.postsService.findAllWithUserId(+userId);
    return this.postsService.findAll();
  }

  // @Get()
  // findAllWithUserId(@Query('userId') userId: number, @Query("skip") skip:number, @Query("limit") limit: number) {
  //   if(userId)
  //   return this.postsService.findAllWithUserId(+userId, +skip, +limit);
  //   return this.postsService.findAll(+skip, +limit);
  // }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }

  @Post("like/:id")
  likePost(@Param('id') postId: string, @Body() userData: {userId: number}) {
    return this.postsService.likePost(+postId, userData.userId);
  }
}
