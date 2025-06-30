import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateEquipoInput {
  @Field(() => Int)
  idPersonal: number;

  @Field({ nullable: true })
  coordinador?: boolean;

  @Field({ nullable: true })
  ConsultorAsociado?: boolean;

  @Field({ nullable: true })
  Investigador?: boolean;

  @Field({ nullable: true })
  SubCoordinador?: boolean;
}


@InputType()
export class CreateAreaInput {
  @Field(() => Int)
  idArea: number;
}


@InputType()
export class CreateProjectInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  paisRegion?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  contratante?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  direccion?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  montoContrato?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  numeroContrato?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  mesInicio?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  anioInicio?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  mesFinalizacion?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  anioFinalizacion?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  consultoresAsociados?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  resultados?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  fichaLista?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  enCurso?: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  departamento?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  moneda?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  certconformidad?: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  certificadoPor?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  link?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  convenio?: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  pdf?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  issn?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  isbn?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  cita?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  revista?: string;

  @Field(() => [CreateEquipoInput], { nullable: true })
  @IsOptional()
  equipo?: CreateEquipoInput[];

  @Field(() => [CreateAreaInput], { nullable: true })
  @IsOptional()
  areas?: CreateAreaInput[];
}
