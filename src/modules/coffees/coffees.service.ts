import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { COFFEES_REPOSITORY } from 'src/core/constants';
import { Coffee } from './coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEES_REPOSITORY)
    private coffeesRepository: typeof Coffee,
  ) {}

  async findAll(): Promise<Coffee[]> {
    return await this.coffeesRepository.findAll();
  }

  async findOne(id: number): Promise<Coffee> {
    const coffee = await this.coffeesRepository.findOne({ where: { id } });
    if (!coffee) throw new NotFoundException('Coffee not found.');
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return await this.coffeesRepository.create({
      ...createCoffeeDto,
      flavors: createCoffeeDto.flavors.join(', '),
    });
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto): Promise<void> {
    const coffee = await this.findOne(id);
    await coffee.update(updateCoffeeDto, { where: { id } });
  }

  async remove(id: number): Promise<void> {
    const coffee = await this.findOne(id);
    await coffee.destroy();
  }
}
