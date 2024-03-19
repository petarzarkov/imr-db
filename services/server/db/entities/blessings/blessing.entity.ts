import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blessing {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        type: string;

    @Column()
        rank: string;
}