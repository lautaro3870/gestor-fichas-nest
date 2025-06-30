import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Personal } from './personal.entity';

@Entity('equipoxproyecto')
@ObjectType()
export class Equipoxproyecto {
  @PrimaryColumn({ name: 'id_proyecto' })
  @Field(() => Int, { nullable: true })
  idProyecto: number;

  @PrimaryColumn({ name: 'id_personal' })
  @Field(() => Int, { nullable: true })
  idPersonal: number;

  @Column()
  @Field(() => String, { nullable: true })
  texto?: string;

  @Column()
  @Field(() => Boolean, { nullable: true })
  coordinador: boolean;

  @Column({ name: 'ConsultorAsociado' })
  @Field(() => Boolean, { nullable: true })
  consultorAsociado: boolean;

  @Column({ name: 'Investigador' })
  @Field(() => Boolean, { nullable: true })
  investigador: boolean;

  @Column({ name: 'SubCoordinador' })
  @Field(() => Boolean, { nullable: true })
  subCoordinador: boolean;

  @ManyToOne(() => Project, (project) => project.equipoxProyecto)
  @JoinColumn({ name: 'id_proyecto' })
  @Field(() => Project, { nullable: true })
  proyecto: Project;

  @ManyToOne(() => Personal, (personal) => personal.equipoxProyecto)
  @JoinColumn({ name: 'id_personal' })
  @Field(() => Personal, { nullable: true })
  personal: Personal;
}
