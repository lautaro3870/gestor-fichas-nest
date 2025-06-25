import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Areasxproyecto } from 'src/areas/entities/areasxproyecto.entity';
import { Equipoxproyecto } from 'src/personal/entities/equipoxproyecto.enity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('proyectos')
@ObjectType()
export class Project {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String, { nullable: true })
  titulo: string;

  @Column({ name: 'pais-region' })
  @Field(() => String, { nullable: true })
  paisRegion: string;

  @Column()
  @Field(() => String, { nullable: true })
  contratante: string;

  @Column({ name: 'dirección' })
  @Field(() => String, { nullable: true })
  direccion: string;

  @Column({ name: 'monto_contrato' })
  @Field(() => String, { nullable: true })
  montoContrato: string;

  @Column({ name: 'nro_contrato' })
  @Field(() => String, { nullable: true })
  numeroContrato: string;

  @Column({ name: 'mes_inicio' })
  @Field(() => Int, { nullable: true })
  mesInicio: number;

  @Column({ name: 'mes_inicio' })
  @Field(() => Int, { nullable: true })
  anioInicio: number;

  @Column({ name: 'mes_finalizacion' })
  @Field(() => Int, { nullable: true })
  mesFinalizacion: number;

  @Column({ name: 'anio_inicio' })
  @Field(() => Int, { nullable: true })
  anioFinalizacion: number;

  @Column({ name: 'consultores_asoc' })
  @Field(() => String, { nullable: true })
  consultoresAsociados: string;

  @Column()
  @Field(() => String, { nullable: true })
  descripcion: string;

  @Column()
  @Field(() => String, { nullable: true })
  resultados: string;

  @Column({ name: 'ficha_lista' })
  @Field(() => String, { nullable: true })
  fichaLista: string;

  @Column({ name: 'en_curso' })
  @Field(() => Boolean, { nullable: true })
  enCurso: boolean;

  @Column()
  @Field(() => String, { nullable: true })
  departamento: string;

  @Column()
  @Field(() => String, { nullable: true })
  moneda: string;

  @Column({ name: 'certconformidad' })
  @Field(() => Boolean, { nullable: true })
  certConformidad: boolean;

  @Column({ name: 'certificadopor' })
  @Field(() => Int, { nullable: true })
  certificadoPor: number;

  @Column()
  @Field(() => Boolean, { nullable: true })
  activo: boolean;

  @Column()
  @Field(() => String, { nullable: true })
  link: string;

  @Column()
  @Field(() => Boolean, { nullable: true })
  convenio: boolean;

  @Column()
  @Field(() => String, { nullable: true })
  pdf: string;

  @Column()
  @Field(() => String, { nullable: true })
  issn: string;

  @Column()
  @Field(() => String, { nullable: true })
  isbn: string;

  @Column()
  @Field(() => String, { nullable: true })
  cita: string;

  @Column({ name: 'Revista' })
  @Field(() => String, { nullable: true })
  revista: string;

  @OneToMany(() => Areasxproyecto, (axp) => axp.proyecto)
  @Field(() => [Areasxproyecto], { nullable: true })
  areasxProyecto: Areasxproyecto[];

  @OneToMany(() => Equipoxproyecto, (exp) => exp.proyecto)
  @Field(() => [Equipoxproyecto], { nullable: true })
  equipoxProyecto: Equipoxproyecto[];
}
