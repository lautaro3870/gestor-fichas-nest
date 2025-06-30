import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.entity';
import { Equipoxproyecto } from 'src/personal/entities/equipoxproyecto.enity';
import { Areasxproyecto } from 'src/areas/entities/areasxproyecto.entity';
import { Area } from 'src/areas/entities/area.entity';
import { Personal } from 'src/personal/entities/personal.entity';

@Injectable()
export class ProjectsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
    @InjectRepository(Equipoxproyecto)
    private readonly equipoxProjectoRepository: Repository<Equipoxproyecto>,
    @InjectRepository(Areasxproyecto)
    private readonly areaxProyectoRepository: Repository<Areasxproyecto>,
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
    @InjectRepository(Personal)
    private readonly personalRepositroy: Repository<Personal>
  ) {}

  async findAll(): Promise<Project[]> {
    const projects = await this.projectsRepository.find({
      where: { activo: true },
      relations: [
        'areasxProyecto',
        'areasxProyecto.area',
        'equipoxProyecto',
        'equipoxProyecto.personal',
      ],
      order: { id: 'DESC' },
    });

    return projects.map((project) => ({
      ...project,
      areasxProyecto: project.areasxProyecto.filter(
        (axp) => axp.area && axp.area.activo
      ),
      equipoxProyecto: project.equipoxProyecto.filter(
        (exp) => exp.personal && exp.personal.activo
      ),
    }));
  }

  async findOneProject(id: number): Promise<Project> {
    const project = await this.projectsRepository.findOne({
      where: {
        id: id,
        activo: true,
      },
      relations: [
        'areasxProyecto',
        'areasxProyecto.area',
        'equipoxProyecto',
        'equipoxProyecto.personal',
      ],
    });

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return {
      ...project,
      areasxProyecto: project.areasxProyecto.filter(
        (axp) => axp.area && axp.area.activo
      ),
      equipoxProyecto: project.equipoxProyecto.filter(
        (exp) => exp.personal && exp.personal.activo
      ),
    };
  }

  async createProject(createProjectDto: CreateProjectInput): Promise<Project> {
    return this.dataSource.transaction(async (manager) => {
      const project = this.projectsRepository.create({
        ...createProjectDto,
        activo: true,
      });
      const projectSaved = await manager.save(project);

      if (createProjectDto.areas && createProjectDto.areas.length > 0) {
        const areas: Areasxproyecto[] = [];

        for (const a of createProjectDto.areas) {
          const area = await this.areaRepository.findOne({
            where: {
              id: a.idArea,
            },
          });

          if (!area?.activo) {
            throw new Error('The area is not active');
          }
          const areaProyecto: Areasxproyecto =
            this.areaxProyectoRepository.create({
              area: { id: a.idArea },
              proyecto: { id: projectSaved.id },
            });

          areas.push(areaProyecto);
        }
        await manager.save(areas);
      }

      if (createProjectDto.equipo && createProjectDto.equipo.length > 0) {
        const equipo: Equipoxproyecto[] = [];

        for (const eq of createProjectDto.equipo) {
          const personal = await this.personalRepositroy.findOne({
            where: {
              id: eq.idPersonal,
            },
          });

          if (!personal?.activo) {
            throw new Error('The personal is not active');
          }

          const equipoxProyecto: Equipoxproyecto =
            this.equipoxProjectoRepository.create({
              coordinador: eq.coordinador ?? false,
              consultorAsociado: eq.ConsultorAsociado ?? false,
              investigador: eq.Investigador ?? false,
              subCoordinador: eq.SubCoordinador ?? false,
              personal: { id: eq.idPersonal },
              proyecto: { id: projectSaved.id },
            });

          equipo.push(equipoxProyecto);
        }
        await manager.save(equipo);
      }
      return projectSaved;
    });
  }
}
