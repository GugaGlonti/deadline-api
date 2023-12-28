export class Deadline {
  userId: string;
  title: string;

  date: string;

  singleOccurrence: boolean;
  occurrences?: number;

  subject?: string;
  description?: string;
}
