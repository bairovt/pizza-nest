import { Controller, Get, Post } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { Pizza } from './entities/pizza.entity';

@Controller('pizza')
export class PizzaController {
    constructor(private readonly pizzaService: PizzaService) { }

    @Get()
    async getPizzas(): Promise<Pizza[]> {
        const pizzas = await this.pizzaService.findAll();
        return pizzas;
    }

    @Post()
    addPizza(): any {
        return 'df'
    }

}
