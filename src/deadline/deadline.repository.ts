import { Injectable } from '@nestjs/common';
import { Deadline } from './Deadline.entity';
import { AddDeadlineDto } from './dto/addDeadline.dto';

@Injectable()
export class DeadlineRepository {
  private dealines: Deadline[] = [
    {
      userId: 'heTL3nHCc7OnljHjFURIRk6tw6A3',
      title: 'test',
      subject: 'test',
      description: 'sdfsd',
      date: '2023-12-09T00:04:00.000Z',
      singleOccurrence: true,
      occurrences: 1,
    },
  ];

  public getDeadlines() {
    return this.dealines;
  }

  public addDeadline(deadline: AddDeadlineDto) {
    this.dealines.push(Object.assign(new Deadline(), deadline));
  }
}
