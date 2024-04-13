import {
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // 实现自定义的认证逻辑
    const request = context.switchToHttp().getRequest();
    return request.session.userId; // 返回 true 表示认证通过，返回 false 表示认证失败
  }
}