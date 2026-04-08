import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserLogsService } from './user-logs.service';
import { CreateUserLogDto } from './dto/create-user-log.dto';
import { Request } from 'express';

@Controller()
@UseGuards(JwtAuthGuard)
export class UserLogsController {
  constructor(private trackingService: UserLogsService) {}
  @Post('log')
  create(@Req() req: Request, @Body() dto: CreateUserLogDto) {
    return this.trackingService.create(req.user!.id, dto);
  }

  @Get('logs')
  findAll(@Req() req: Request, @Query('range') range?: 'week' | 'month') {
    if (range) {
      return this.trackingService.findByRange(req.user!.id, range);
    }
    return this.trackingService.findAll(req.user!.id);
  }
}
