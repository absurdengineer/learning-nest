import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') name: string): string {
    console.log(name);
    return 'This Action creates a new Coffee Object.';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `This Action update #${id} coffee`;
  }
}
