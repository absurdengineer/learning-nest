import { Coffee } from './coffee.entity';
import { COFFEES_REPOSITORY } from '../core/constants';

export const coffeesProviders = [
  {
    provide: COFFEES_REPOSITORY,
    useValue: Coffee,
  },
];
