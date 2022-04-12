import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatCampanias } from './campanias';
import { CatMedio } from "./medio";

@Entity()
export class CatEstatus{
    @PrimaryGeneratedColumn('increment')
    idEstatus:number;

    @OneToOne(() => CatMedio, medio => medio.Estatus)
    Medio:CatMedio;

    @Column({type:'varchar', length:30, nullable:false})
    Descripcion:string;

    @OneToOne(() => CatCampanias, campania => campania.Estatus )
    Campania:CatCampanias;
}