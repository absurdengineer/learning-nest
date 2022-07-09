import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('This Action returns all the coffees.');
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
}
