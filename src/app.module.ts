import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { MessagesModule } from './messages/messages.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    PostsModule, 
    MessagesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
