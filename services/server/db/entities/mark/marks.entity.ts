import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["name"])
export class Mark {
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
