import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserLogDto } from './dto/create-user-log.dto';

@Injectable()
export class UserLogsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateUserLogDto) {
    return this.prisma.dailyLog.create({
      data: {
        userId,
        ...dto,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.dailyLog.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  }

  async findByRange(userId: string, range: 'week' | 'month') {
    const now = new Date();
    const from = new Date();

    if (range === 'week') {
      from.setDate(now.getDate() - 7);
    } else {
      from.setMonth(now.getMonth() - 1);
    }

    return this.prisma.dailyLog.findMany({
      where: {
        userId,
        date: { gte: from },
      },
      orderBy: { date: 'asc' },
    });
  }
}
