import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateWorkflowDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  buildingId: number;
}