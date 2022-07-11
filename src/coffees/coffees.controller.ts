import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  async findAll() {
    const coffees = await this.coffeesService.findAll();
    return { data: coffees, message: 'Coffees retrieved successfully.' };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const coffee = await this.coffeesService.findOne(id);
    return { data: coffee, message: 'Coffee retrieved successfully.' };
  }

  @Post()
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    const coffee = await this.coffeesService.create(createCoffeeDto);
    return { data: coffee, message: 'Coffee created successfully.' };
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    await this.coffeesService.update(id, updateCoffeeDto);
    return { data: updateCoffeeDto, message: 'Coffee updated successfully.' };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.coffeesService.remove(id);
    return { message: 'Coffee removed successfully.' };
  }
}
