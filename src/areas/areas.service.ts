import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { CreateArea } from './dto/create-area.entity';
import { UpdateArea } from './dto/update-area.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private readonly areasRepository: Repository<Area>
  ) {}

  async findAreas(): Promise<Area[]> {
    return await this.areasRepository.find({
      where: {
        activo: true,
      },
      order: { id: 'desc' },
    });
  }

  async findOneArea(id: number): Promise<Area> {
    const area = await this.areasRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!area) {
      throw new NotFoundException(`Area with ${id} not found`);
    }
    return area;
  }

  async createArea(area: CreateArea): Promise<Area> {
    const newArea = this.areasRepository.create({
      ...area,
      activo: true,
    });
    return await this.areasRepository.save(newArea);
  }

  async updateArea(id: number, updateArea: UpdateArea): Promise<Area> {
    const area = await this.areasRepository.preload(updateArea);
    if (!area) {
      throw new NotFoundException(`Area with ${id} not found`);
    }
    return await this.areasRepository.save(area);
  }

  async deleteArea(id: number): Promise<Area> {
    const areaToDelete = await this.findOneArea(id);
    areaToDelete.activo = false;
    return await this.areasRepository.save(areaToDelete);
  }
}
