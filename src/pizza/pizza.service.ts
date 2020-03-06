import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pizza } from './entities/pizza.entity';

@Injectable()
export class PizzaService {
    constructor(
        @InjectRepository(Pizza)
        private readonly pizzaRepo: Repository<Pizza>,
    ) { }

    findAll(): Promise<Pizza[]> {
        return this.pizzaRepo.find();
    }

    findOne(id: string): Promise<Pizza> {
        return this.pizzaRepo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.pizzaRepo.delete(id);
    }
}
