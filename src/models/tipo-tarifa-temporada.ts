import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatTipoTarifaTemporada{
    @PrimaryGeneratedColumn('increment')
    idTipoTarifaTemporada:number;

    @Column({type:'float', nullable:false})
    Precio:number;

    @Column({type:'varchar', length:255, nullable:false})
    Descripcion:string;

}