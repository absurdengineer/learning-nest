import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Latte',
      brand: 'McDonalds',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Mocha',
      brand: 'Brew Bonny',
      flavors: ['dark', 'strawberry'],
    },
  ];
}
