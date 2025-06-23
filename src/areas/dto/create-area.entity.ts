import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateArea {
  @Column()
  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  @IsString()
  area: string;
}
