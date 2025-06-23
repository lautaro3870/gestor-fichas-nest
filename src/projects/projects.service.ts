import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly projectsRepository: Repository<Proyecto>
  ) {}

  async findAll(): Promise<Proyecto[]> {
    return await this.projectsRepository.find({
      where: {
        activo: true,
      },
      order: {
        id: 'desc',
      },
    });
  }
}
