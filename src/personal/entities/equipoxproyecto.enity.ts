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
  @Field(() => Int, { nullable: true })
  texto: number;

  @Column()
  @Field(() => Int, { nullable: true })
  coordinador: string;

  @Column({ name: 'ConsultorAsociado' })
  @Field(() => Int, { nullable: true })
  consultorAsociado: string;

  @Column({ name: 'Investigador' })
  @Field(() => Int, { nullable: true })
  investigador: string;

  @Column({ name: 'SubCoordinador' })
  @Field(() => Int, { nullable: true })
  subCoordinador: string;

  @ManyToOne(() => Project, (project) => project.equipoxProyecto)
  @JoinColumn({ name: 'id_proyecto' })
  @Field(() => Project)
  proyecto: Project;

  @ManyToOne(() => Personal, (personal) => personal.equipoxProyecto)
  @JoinColumn({ name: 'id_personal' })
  @Field(() => Personal)
  personal: Personal;
}
