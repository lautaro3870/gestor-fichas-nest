import { Args, Int, Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Query } from '@nestjs/graphql';
import { Project } from './entities/project.entity';

@Resolver('Project')
export class ProjectsResolver {
  
  constructor(private readonly projectsService: ProjectsService) {}
  
  @Query(() => [Project])
  findAllProjects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Query(() => Project)
  findOneProject(
    @Args('id', { type: () => Int}) id: number
  ): Promise<Project> {
    return this.projectsService.findOneProject(id);
  }
}
