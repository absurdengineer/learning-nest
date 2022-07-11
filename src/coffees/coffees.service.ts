import { Inject, Injectable } from '@nestjs/common';
import { COFFEE_REPOSITORY } from 'src/core/constants';
import { Coffee } from './coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEE_REPOSITORY)
    private coffeesRepository: typeof Coffee,
  ) {}

  async findAll() {
    return await this.coffeesRepository.findAll();
  }
  async findOne(id: number) {
    return await this.coffeesRepository.findOne({ where: { id } });
  }
  async create(createCoffeeDto: CreateCoffeeDto) {
    await this.coffeesRepository.create({
      ...createCoffeeDto,
      flavors: createCoffeeDto.flavors.join(', '),
    });
  }
  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    await this.coffeesRepository.update(updateCoffeeDto, { where: { id } });
  }
  async remove(id: number) {
    await this.coffeesRepository.destroy({ where: { id } });
  }
}
