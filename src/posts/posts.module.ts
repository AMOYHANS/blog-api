import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/users.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, UsersService],
})
export class PostsModule {}
