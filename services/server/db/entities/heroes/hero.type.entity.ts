import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum HeroType {
    ATTACK = "attack",
    DEFENSE = "defense",
    SUPPORT = "support"
}

@Entity()
export class HeroTypeEntity {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "text",
        unique: true,
        enum: HeroType,
    })
        type: HeroType;

    @Column("text")
        icon_url: string;

    @Column({
        type: "text",
        default: null,
    })
        description?: string | null;
}
