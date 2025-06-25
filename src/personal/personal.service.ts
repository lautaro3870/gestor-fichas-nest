import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Personal } from './entities/personal.entity';
import { Repository } from 'typeorm';
import { CreatePersonal } from './dto/create-personal.entity';
import { UpdatePersonal } from './dto/update-personal.entity';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepository: Repository<Personal>
  ) {}

  async findAllPersonal(): Promise<Personal[]> {
    return await this.personalRepository.find({
      where: {
        activo: true,
      },
      order: {
        id: 'desc',
      },
    });
  }

  async findOnePersonal(id: number): Promise<Personal> {
    const personal = await this.personalRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!personal) {
      throw new NotFoundException('Personal not found');
    }
    return personal;
  }

  async createPersonal(createPersonal: CreatePersonal): Promise<Personal> {
    const newPersonal = this.personalRepository.create({
      ...createPersonal,
      activo: true,
    });
    return await this.personalRepository.save(newPersonal);
  }

  async updatePersonal(
    id: number,
    updatePersonal: UpdatePersonal
  ): Promise<Personal> {
    const updated = await this.personalRepository.preload(updatePersonal);
    if (!updated) {
      throw new NotFoundException(`Personal with ${id} not found`);
    }
    return await this.personalRepository.save(updated);
  }

  async deletePersonal(id: number): Promise<Personal> {
    const personal = await this.findOnePersonal(id);
    personal.activo = false;
    return await this.personalRepository.save(personal);
  }
}
