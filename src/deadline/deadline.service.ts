import { Injectable } from '@nestjs/common';
import { DeadlineRepository } from './deadline.repository';
import { AddDeadlineDto } from './dto/addDeadline.dto';

@Injectable()
export class DeadlineService {
  constructor(private readonly deadlineRepository: DeadlineRepository) {}

  public getDeadlines() {
    return this.deadlineRepository.getDeadlines();
  }

  public addDeadline(deadline: AddDeadlineDto) {
    return this.deadlineRepository.addDeadline(deadline);
  }
}
