import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, ctx: ExecutionContext) => {
    
    // // 获取请求对象
    // const request = ctx.switchToHttp().getRequest();
    // // 获取请求头中的token
    // const token = request.headers.authorization;
    // // 解析token
    // const user = parseToken(token);
    // // 返回解析后的用户信息
    // return user;
    const request = ctx.switchToHttp().getRequest();
    return request.currentUser;
  }
)