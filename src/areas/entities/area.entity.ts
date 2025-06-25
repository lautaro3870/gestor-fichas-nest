import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Areasxproyecto } from './areasxproyecto.entity';

@Entity({ name: 'areas' })
@ObjectType()
export class Area {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column()
  @Field(() => String, { nullable: true })
  area: string;

  @Column()
  @Field(() => Boolean, { nullable: true, defaultValue: true })
  activo: boolean;

  @OneToMany(() => Areasxproyecto, (axp) => axp.area)
  areasxProyecto: Areasxproyecto[];
}
