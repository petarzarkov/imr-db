import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Emblem } from "../emblems/emblems.entity";
import { Faction } from "../factions/factions.entity";
import { HeroRating } from "./hero.rating.entity";
import { HeroRarity } from "./hero.rarity";
import { HeroMarkEntity } from "./hero.mark.entity";
import { HeroTypeEntity } from "./hero.type.entity";

@Entity()
export class Hero {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "text",
        unique: true,
    })
        name: string;

    @OneToOne(() => HeroTypeEntity)
    @JoinColumn()
        type: HeroTypeEntity;

    @Column({ enum: HeroRarity })
        rarity: HeroRarity;

    @OneToOne(() => HeroMarkEntity)
    @JoinColumn()
        mark: HeroMarkEntity;

    @Column({
        type: "text",
    })
        description: string;

    @Column("text")
        stat_focus: string;

    @Column("text")
        gear_focus: string;

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
