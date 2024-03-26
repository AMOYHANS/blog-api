import {IsEmail, IsString, IsInt} from "class-validator"
export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  name:     string;
  @IsString()
  password:  string;
  @IsString()
  avatar: string;
  @IsInt()
  gender: number;
  @IsString()
  desc: string;
}
