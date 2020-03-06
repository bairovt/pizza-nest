import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza])],
  providers: [PizzaService],
  controllers: [PizzaController]
})
export class PizzaModule { }
