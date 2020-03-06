import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column('text')
    info: string;

    @Column()
    img: string;

    @Column()
    sliderImg: string;

    @Column({ default: true })
    isActive: boolean;

}