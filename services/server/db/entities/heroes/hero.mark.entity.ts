import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum HeroMark {
    FORCE = "force",
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

@Entity()
export class HeroMarkEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "text",
        unique: true,
        enum: HeroMark,
    })
        mark: HeroMark;

    @Column("text")
        icon_url: string;

    @Column({
        type: "text",
        default: null,
    })
        note: string | null;
}
