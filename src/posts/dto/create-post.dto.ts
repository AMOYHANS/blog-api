import { IsString, IsBoolean, IsOptional } from "class-validator";
import { Prisma } from "@prisma/client";

export class CreatePostDto {
  @IsString()
  title: string;
  
  authorId: number;
  @IsOptional()
  @IsString()
  content: string;
  @IsOptional()
  @IsBoolean()
  published: boolean;
  @IsOptional()
  @IsString()
  pic: string;
}