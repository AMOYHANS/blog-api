import {IsEmail, IsString, IsInt, IsOptional} from "class-validator"
export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  name:     string;
  @IsString()
  password:  string;

  @IsString()
  @IsOptional()
  avatar: string;
  @IsString()
  @IsOptional()
  bgImg: string;
  @IsInt()
  @IsOptional()
  gender: number;
  @IsString()
  @IsOptional()
  desc: string;
}
