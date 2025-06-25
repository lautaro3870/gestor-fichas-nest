import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { Area} from './area.entity';

@Entity('areasxproyecto')
@ObjectType()
export class Areasxproyecto {
  @PrimaryColumn({ name: 'idproyecto' })
  idproyecto: number;

  @PrimaryColumn({ name: 'idarea' })
  idarea: number;

  @ManyToOne(() => Project, (project) => project.areasxProyecto)
  @JoinColumn({ name: 'idproyecto' })
  @Field(() => Project)
  proyecto: Project;

  @ManyToOne(() => Area, (area) => area.areasxProyecto)
  @JoinColumn({ name: 'idarea' })
  @Field(() => Area)
  area: Area;
}