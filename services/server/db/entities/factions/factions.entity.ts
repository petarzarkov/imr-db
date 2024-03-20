import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faction {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "text",
        unique: true,
    })
        name: string;

    @Column("text")
        icon_url: string;

    @Column({
        type: "text",
        default: null,
    })
        note: string | null;
}
