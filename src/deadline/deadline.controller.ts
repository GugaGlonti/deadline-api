import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeadlineService } from './deadline.service';
import { AddDeadlineDto } from './dto/addDeadline.dto';

@Controller('deadlines')
export class DeadlineController {
  constructor(private readonly deadlineService: DeadlineService) {}

  @Get('/')
  getDeadlines() {
    return this.deadlineService.getDeadlines();
  }

  @Post('/')
  addDeadline(@Body() deadline: AddDeadlineDto) {
    return this.deadlineService.addDeadline(deadline);
  }
}
