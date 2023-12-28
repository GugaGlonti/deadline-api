import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddDeadlineDto {
  @IsString() userId: string;

  @IsString() title: string;

  @IsString() date: string;

  @IsBoolean() singleOccurrence: boolean;

  @IsOptional() @IsNumber() occurrences?: number;

  @IsOptional() @IsString() subject?: string;

  @IsOptional() @IsString() description?: string;
}
