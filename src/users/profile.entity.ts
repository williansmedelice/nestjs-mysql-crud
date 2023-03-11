import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_profile' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  age: number;
}
