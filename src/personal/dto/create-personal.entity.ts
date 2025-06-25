import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreatePersonal {
  @Column({ nullable: false })
  @IsString()
  @IsNotEmpty()
  @Field(() => String, { nullable: false })
  nombre: string;

  @Column({ nullable: true })
  @IsString()
  @Field(() => String, { nullable: true })
  foto: string;

  @Column({ nullable: true })
  @IsString()
  @Field(() => String, { nullable: true })
  perfil: string;
}
