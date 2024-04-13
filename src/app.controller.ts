import { Controller, Get, Post, UseInterceptors, UploadedFile, Param, Res, HttpException, HttpStatus} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname); 
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file.filename
  }

  @Get('getFile/:filename')
  getFile(@Res() res: Response, @Param('filename') fileName: string){
    if(!fs.existsSync(`./uploads/${fileName}`)){
      throw new HttpException("文件不存在", HttpStatus.NOT_FOUND)
    }
    return res.sendFile(fileName, { root: './uploads' });
  }
}
