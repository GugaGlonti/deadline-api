import { Module } from '@nestjs/common';
import { DeadlineService } from './deadline.service';
import { DeadlineController } from './deadline.controller';
import { DeadlineRepository } from './deadline.repository';

@Module({
  controllers: [DeadlineController],
  providers: [DeadlineService, DeadlineRepository],
})
export class DeadlineModule {}
