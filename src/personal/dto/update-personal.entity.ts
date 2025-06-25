import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreatePersonal } from './create-personal.entity';

@InputType()
export class UpdatePersonal extends PartialType(CreatePersonal) {
  @Field(() => Int, { nullable: false })
  @IsInt()
  id: number;
}
