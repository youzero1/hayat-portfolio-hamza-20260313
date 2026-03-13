import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  techStack!: string;

  @Column({ type: 'text', default: '' })
  liveUrl!: string;

  @Column({ type: 'text', default: '' })
  githubUrl!: string;

  @Column({ type: 'text', default: '' })
  imageUrl!: string;

  @Column({ type: 'integer', default: 0 })
  displayOrder!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
