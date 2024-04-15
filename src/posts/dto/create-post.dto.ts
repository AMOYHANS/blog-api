import { IsString, IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

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