import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Emblem } from "../emblems/emblems.entity";
import { Faction } from "../factions/factions.entity";
import { HeroRating } from "./hero.rating.entity";
import { HeroRarity } from "./hero.rarity";
import { HeroMark } from "./hero.mark";
import { HeroType } from "./hero.type";

@Entity()
export class Hero {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "text",
        unique: true,
    })
        name: string;

    @Column("enum", { enum: HeroType })
        type: HeroType;

    @Column("enum", { enum: HeroRarity })
        rarity: HeroRarity;

    @Column("enum", { enum: HeroMark })
        mark: HeroMark;

    @Column("text")
        stat_focus: string;

    @Column({
        type: "text",
        default: null,
    })
        note: string | null;

    @Column("text")
        icon_url: string;

    @OneToOne(() => Faction)
    @JoinColumn()
        faction: Faction;

    @OneToOne(() => Emblem)
    @JoinColumn()
        emblem: Emblem;

    @OneToOne(() => HeroRating)
    @JoinColumn()
        rating: HeroRating;
}
