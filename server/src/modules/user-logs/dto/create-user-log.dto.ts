import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateUserLogDto {
  @IsInt()
  @Min(1)
  @Max(10)
  moodRating!: number;

  @IsInt()
  @Min(1)
  @Max(10)
  anxietyLevel!: number;

  @IsNumber()
  @Min(0)
  @Max(24)
  sleepHours!: number;

  @IsInt()
  @Min(1)
  @Max(10)
  sleepQuality!: number;

  @IsBoolean()
  sleepDisturbance!: boolean;

  @IsString()
  @IsOptional()
  activityType?: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  activityDuration?: number;

  @IsInt()
  @Min(1)
  @Max(10)
  socialFrequency!: number;

  @IsInt()
  @Min(1)
  @Max(10)
  stressLevel!: number;

  @IsInt()
  @Min(1)
  @Max(10)
  depressionScore!: number;

  @IsInt()
  @Min(1)
  @Max(10)
  anxietyScore!: number;
}
