import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Query } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.entity';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => [Project])
  findAllProjects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Query(() => Project)
  findOneProject(
    @Args('id', { type: () => Int }) id: number
  ): Promise<Project> {
    return this.projectsService.findOneProject(id);
  }

  @Mutation(() => Project)
  createProject(
    @Args('createProject') createProject: CreateProjectInput
  ): Promise<Project> {
    return this.projectsService.createProject(createProject);
  }
}
