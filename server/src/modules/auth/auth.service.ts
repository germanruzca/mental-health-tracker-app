import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { TokenData } from 'google-auth-library';
import axios from 'axios';
import { GoogleUserResponse } from './types/google.types';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { UserProfile } from './types/user.types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  getGoogleAuthURL() {
    const params = new URLSearchParams({
      client_id: this.configService.get<string>('google.clientId') || '',
      redirect_uri: this.configService.get<string>('google.callbackUrl') || '',
      response_type: 'code',
      scope: 'email profile',
      access_type: 'offline',
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  async exchangeCodeForTokens(code: string) {
    const { data } = await axios.post<TokenData>(
      'https://oauth2.googleapis.com/token',
      {
        code,
        client_id: this.configService.get<string>('google.clientId'),
        client_secret: this.configService.get<string>('google.clientSecret'),
        redirect_uri: this.configService.get<string>('google.callbackUrl'),
        grant_type: 'authorization_code',
      },
    );

    return data;
  }

  async getGoogleUser(accessToken?: string) {
    const { data } = await axios.get<GoogleUserResponse>(
      'https://www.googleapis.com/oauth2/v2/userinfo',
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    return data;
  }

  async findOrCreateUser(data: Omit<UserProfile, 'id'>) {
    return this.prisma.user.upsert({
      where: { email: data.email },
      update: { name: data.name, picture: data.picture },
      create: { email: data.email, name: data.name, picture: data.picture },
    });
  }

  generateJWT(user: UserProfile) {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name || '',
      picture: user.picture || '',
    });
  }

  verifyJWT(token: string) {
    return this.jwtService.verify(token);
  }
}
