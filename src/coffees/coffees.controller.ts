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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() query): string {
    return `This Action returns ${query.limit} coffees on page #${query.page}.`;
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
