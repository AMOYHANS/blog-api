import { Expose } from "class-transformer";
export class UserDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  // @Transform(({ value }) => value.substring(0, 5))
  email: string;
}