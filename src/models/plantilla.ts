import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatPlantilla{
    @PrimaryGeneratedColumn('increment')
    idPlantilla:number;

    @Column({type:'varchar', length:50, nullable:false})
    Nombre:string;

    @Column({type:'varchar', length:255, nullable:false})
    Valor:string;
}