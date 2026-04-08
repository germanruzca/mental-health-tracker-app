import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { UserProfile } from '../types/user.types';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user: UserProfile }>();
    const token = request.cookies?.access_token as string;

    if (!token) throw new UnauthorizedException();

    try {
      const payload = this.jwtService.verify<
        Omit<UserProfile, 'id'> & { sub: string }
      >(token, {
        secret: this.configService.get<string>('jwt.secret'),
      });
      request.user = {
        id: payload.sub,
        email: payload.email,
        picture: payload.picture,
        name: payload.name,
      };
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
