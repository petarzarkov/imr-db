import { Entity, Column, PrimaryGeneratedColumn, Check } from "typeorm";

@Entity()
export class Blessing {
    @PrimaryGeneratedColumn()
        id: number;

    @Column("text")
        type: string;

    @Column("text")
        rank: string;

    @Column()
    @Check("rating", "\"rating\" >= 0 AND \"rating\" <= 5")
        rating: number;
}