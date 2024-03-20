import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Emblem {
    @PrimaryGeneratedColumn()
        id: number;

    @Column("text")
        image_url: string;
}