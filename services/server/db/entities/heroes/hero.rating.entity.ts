import { Entity, Column, PrimaryGeneratedColumn, Check, } from "typeorm";

@Entity()
export class HeroRating {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
    @Check("arena", "\"arena\" >= 0 AND \"arena\" <= 5")
        arena: number;

    @Column()
    @Check("dwarven_ruins", "\"dwarven_ruins\" >= 0 AND \"dwarven_ruins\" <= 5")
        dwarven_ruins: number;

    @Column()
    @Check("tower_of_mark", "\"tower_of_mark\" >= 0 AND \"tower_of_mark\" <= 5")
        tower_of_mark: number;

    @Column()
    @Check("faction_abyss", "\"faction_abyss\" >= 0 AND \"faction_abyss\" <= 5")
        faction_abyss: number;

    @Column()
    @Check("guild_boss", "\"guild_boss\" >= 0 AND \"guild_boss\" <= 5")
        guild_boss: number;

    @Column()
    @Check("broken_land", "\"broken_land\" >= 0 AND \"broken_land\" <= 5")
        broken_land: number;

    @Column()
    @Check("wuthering_cost", "\"wuthering_cost\" >= 0 AND \"wuthering_cost\" <= 5")
        wuthering_cost: number;
}
