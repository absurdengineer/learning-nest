import { Inject, Injectable } from '@nestjs/common';
import { COFFEE_REPOSITORY } from 'src/core/constants';
import { Coffee } from './coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject(COFFEE_REPOSITORY)
    private coffeesRepository: typeof Coffee,
  ) {}

  async findAll() {
    return [];
  }
  findOne(id: string) {
    return '' + id;
  }
  create(createCoffeeDto: any) {
    console.log('Action Invoked' + createCoffeeDto);
  }
  update(id: string, updateCoffeeDto: any) {
    console.log('Action Invoked' + updateCoffeeDto);
  }
  remove(id: string) {
    console.log('Action Invoked' + id);
  }
}
