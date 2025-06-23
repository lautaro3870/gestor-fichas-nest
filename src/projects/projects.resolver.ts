import { Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Query } from '@nestjs/graphql';
import { Proyecto } from './entities/project.entity';

@Resolver('Project')
export class ProjectsResolver {
  
  constructor(private readonly projectsService: ProjectsService) {}
  
  @Query(() => [Proyecto])
  async sayHello(): Promise<Proyecto[]> {
    return this.projectsService.findAll();
  }
}
