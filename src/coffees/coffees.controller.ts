import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  @Post()
  create(@Body('name') name: string): string {
    console.log(name);
    return 'This Action creates a new Coffee Object.';
  }
}
