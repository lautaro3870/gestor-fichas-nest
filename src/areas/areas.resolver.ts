import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { AreasService } from './areas.service';
import { Area } from './entities/area.entity';
import { Query } from '@nestjs/graphql';
import { CreateArea } from './dto/create-area.entity';
import { UpdateArea } from './dto/update-area.entity';

@Resolver(() => Area)
export class AreasResolver {
  constructor(private readonly areasService: AreasService) {}

  @Query(() => [Area], { name: 'areas' })
  async findAreas(): Promise<Area[]> {
    return this.areasService.findAreas();
  }

  @Query(() => Area, { name: 'area' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Area> {
    return this.areasService.findOneArea(id);
  }

  @Mutation(() => Area)
  createArea(@Args('createArea') createArea: CreateArea): Promise<Area> {
    return this.areasService.createArea(createArea);
  }

  @Mutation(() => Area)
  updateArea(@Args('updateArea', { type: () => UpdateArea}) updateArea: UpdateArea): Promise<Area> {
    return this.areasService.updateArea(updateArea.id, updateArea);
  }

  @Query(() => Area)
  deleteArea(@Args('id', { type: () => Int }) id: number): Promise<Area> {
    return this.areasService.deleteArea(id);
  }
}
