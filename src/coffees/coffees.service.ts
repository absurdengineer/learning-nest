import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
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
