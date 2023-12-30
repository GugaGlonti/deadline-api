import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  uid: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  avatar: string;
}
