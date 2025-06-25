import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find({
      where: {
        activo: true,
      },
      order: {
        id: 'desc',
      },
      relations: ['areasxProyecto', 'areasxProyecto.area', 'equipoxProyecto', 'equipoxProyecto.personal'],
    });
  }

  async findOneProject(id: number): Promise<Project> {
    const project = await this.projectsRepository.findOne({
      where: {
        id: id,
        activo: true,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }
    return project;
  }
}
