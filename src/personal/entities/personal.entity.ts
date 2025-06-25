import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Equipoxproyecto } from './equipoxproyecto.enity';

@Entity('personal')
@ObjectType()
export class Personal {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  nombre: string;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  activo: boolean;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  foto: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  perfil: string;

  @OneToMany(() => Equipoxproyecto, (exp) => exp.personal)
  equipoxProyecto: Equipoxproyecto[];
}
