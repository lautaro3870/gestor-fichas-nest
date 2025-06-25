import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { PersonalService } from './personal.service';
import { Query } from '@nestjs/graphql';
import { Personal } from './entities/personal.entity';
import { CreatePersonal } from './dto/create-personal.entity';
import { UpdatePersonal } from './dto/update-personal.entity';

@Resolver()
export class PersonalResolver {
  constructor(private readonly personalService: PersonalService) {}

  @Query(() => [Personal])
  findAllPersonal(): Promise<Personal[]> {
    return this.personalService.findAllPersonal();
  }

  @Query(() => Personal)
  findOnePersonal(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Personal> {
    return this.personalService.findOnePersonal(id);
  }

  @Query(() => Personal)
  deletePersonal(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Personal> {
    return this.personalService.deletePersonal(id);
  }

  @Mutation(() => Personal)
  updatePersonal(
    @Args('updatePersonal', { type: () => UpdatePersonal })
    updatePersonal: UpdatePersonal
  ): Promise<Personal> {
    return this.personalService.updatePersonal(
      updatePersonal.id,
      updatePersonal
    );
  }

  @Mutation(() => Personal)
  createPersonal(
    @Args('createPersonal', { type: () => CreatePersonal })
    createPersonal: CreatePersonal
  ): Promise<Personal> {
    return this.personalService.createPersonal(createPersonal);
  }
}
