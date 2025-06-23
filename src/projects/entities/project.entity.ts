import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('proyectos')
@ObjectType()
export class Proyecto {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String, { nullable: true })
  titulo: string;

  @Column()
  @Field(() => Boolean, { nullable: true })
  activo: boolean;
}
