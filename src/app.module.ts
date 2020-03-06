import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Pizza } from './pizza/entities/pizza.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql',
      password: 'proxmox',
      database: 'pizza',
      entities: [Pizza],
      synchronize: true,
    }),
    PizzaModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
