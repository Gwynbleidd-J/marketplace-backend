import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CatTipoTarifa{
    @PrimaryGeneratedColumn('increment')
    idTipoTarifa:number;

    @Column({type:'float'})
    Precio:number;

    @Column({type:'varchar', length:255, nullable:false})
    Descripcion:string;

    @Column({type:'varchar', length:255, nullable:true})
    Repeticiones:string;
}