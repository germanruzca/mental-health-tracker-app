import { registerAs } from '@nestjs/config';

export const googleConfig = registerAs('google', () => ({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl: process.env.GOOGLE_CALLBACK_URL,
}));

export const jwtConfig = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  expiresIn: '7d',
}));

export const appConfig = registerAs('app', () => ({
  clientUrl: process.env.CLIENT_URL,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT ?? 3000,
}));
