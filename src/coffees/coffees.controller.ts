import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'This Action returns all the coffees.';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This Action returns the specific coffee with id #${id}.`;
  }
}
