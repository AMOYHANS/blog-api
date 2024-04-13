import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("api")
  app.use(cookieSession({
    keys: ["hanscai"],
  }))
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(path.join(__dirname, "../uploads"))
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
