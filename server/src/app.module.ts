import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { googleConfig, jwtConfig, appConfig } from './config/config';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [googleConfig, jwtConfig, appConfig],
    }),
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
