import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { Project } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipoxproyecto } from 'src/personal/entities/equipoxproyecto.enity';
import { Areasxproyecto } from 'src/areas/entities/areasxproyecto.entity';
import { Area } from 'src/areas/entities/area.entity';
import { Personal } from 'src/personal/entities/personal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Project,
      Equipoxproyecto,
      Areasxproyecto,
      Area,
      Personal,
    ]),
  ],
  providers: [ProjectsResolver, ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
