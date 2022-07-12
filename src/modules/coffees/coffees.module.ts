import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { coffeesProviders } from './coffees.providers';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, ...coffeesProviders],
})
export class CoffeesModule {}
