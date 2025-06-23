import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateArea } from './create-area.entity';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateArea extends PartialType(CreateArea) {
  @Field(() => Int, { nullable: false })
  @IsInt()
  id: number;
}
