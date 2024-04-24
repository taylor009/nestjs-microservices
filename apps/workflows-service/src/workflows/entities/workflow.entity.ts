import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Workflow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  buildingId: number;
}
