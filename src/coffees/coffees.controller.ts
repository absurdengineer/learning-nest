import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query('page') page, @Query('limit') limit): string {
    return `This Action returns ${limit} coffees on page #${page}.`;
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This Action removes #${id} coffee`;
  }
}
