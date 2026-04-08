import { Controller, Get, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { JWT_CONSTANTS } from './constants/jwt.constants';
import { UserProfile } from './types/user.types';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Get('google')
  googleLogin(@Res() res: Response) {
    const url = this.authService.getGoogleAuthURL();
    res.redirect(url);
  }

  @Get('me')
  getProfile(@Res() res: Response) {
    const token = res.req.cookies[JWT_CONSTANTS.ACCESS_TOKEN];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const user = this.authService.verifyJWT(token);
      res.json({ user });
    } catch (error) {
      const err = error as Error;
      res.status(401).json({ message: 'Invalid token', error: err.message });
    }
  }

  @Get('google/callback')
  async googleCallback(@Query('code') code: string, @Res() res: Response) {
    const tokens = await this.authService.exchangeCodeForTokens(code);
    const googleUser = await this.authService.getGoogleUser(
      tokens.access_token || '',
    );
    const user: UserProfile = await this.authService.findOrCreateUser({
      email: googleUser.email,
      name: googleUser.name,
      picture: googleUser.picture,
    });

    const jwt = this.authService.generateJWT(user);

    res.cookie(JWT_CONSTANTS.ACCESS_TOKEN, jwt, {
      httpOnly: true,
      secure: this.configService.get<string>('app.nodeEnv') === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect(
      `${this.configService.get<string>('app.clientUrl')}/dashboard`,
    );
  }

  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie(JWT_CONSTANTS.ACCESS_TOKEN);
    res.redirect(this.configService.get<string>('app.clientUrl') || '/');
  }
}
