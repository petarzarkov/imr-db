/* eslint-disable max-len */
// import { Faction } from "../entities/factions/factions.entity";
// import { MigrationInterface, QueryRunner } from "typeorm";

// // Nordak
// //https://drive.google.com/thumbnail?id=1h5_3nlS0H4F96ZlKN2KpyRKSU0wgS0SG&sz=w200h200
// export class AddFactions1710943356910 implements MigrationInterface {
//     name = "AddFactions1710943356910";
//     factions: Omit<Faction, "id">[] = [
//         {
//             name: "Dragon Tribe",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Holy Light Parliament",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//             note: "a well rounded faction",
//         },
//         {
//             name: "Sagacity Alliance",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Foresters",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Dragon Tribe",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Dragon Tribe",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Eternal Sect",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//         {
//             name: "Eternal Sect",
//             icon_url:
//                 "https://lh7-us.googleusercontent.com/c7rZBNfbSQAPnhHZpPZ1zYsPvkmIrEgmiP6DPFzRowVObwwCH-bmO7n7c92w4-gVWWmASFfsICgIA1qKeBQ3tf1pNDsTcFPuRZ9PWDoyvqBUi0Xg701LOs_Ej3Rflw6dnGhbPXCRXCLXxffHMlPxwWYLrQ=s2048",
//         },
//     ];

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         const factionRepo = queryRunner.manager.getRepository(Faction);

//         await factionRepo.insert(this.factions);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         const factionRepo = queryRunner.manager.getRepository(Faction);

//         for (const faction of this.factions) {
//             await factionRepo.delete({ name: faction.name });
//         }
//     }
// }
