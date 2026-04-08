import { Module } from '@nestjs/common';
import { UserLogsController } from './user-logs.controller';
import { UserLogsService } from './user-logs.service';
import { AuthModule } from '../auth/auth.module';
import { UserLogsGateway } from './gateway/user-logs.gateway';

@Module({
  imports: [AuthModule],
  controllers: [UserLogsController],
  providers: [UserLogsService, UserLogsGateway],
})
export class UserLogsModule {}
