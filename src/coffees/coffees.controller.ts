import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'This Action returns all the coffees.';
  }
  @Get('flavors')
  findFlavors(): string {
    return 'This Action returns all the coffee flavors.';
  }
}
