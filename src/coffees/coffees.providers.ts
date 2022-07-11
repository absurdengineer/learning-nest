import { Coffee } from './coffee.entity';
import { COFFEE_REPOSITORY } from '../core/constants';

export const coffeesProviders = [
  {
    provide: COFFEE_REPOSITORY,
    useValue: Coffee,
  },
];
