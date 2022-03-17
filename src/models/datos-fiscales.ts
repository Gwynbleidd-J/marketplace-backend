import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatDatosFiscales{
    @PrimaryGeneratedColumn('increment')
    idDatosFiscales:number;

    @Column({type:'varchar', length:15, nullable:false})
    RFC:string;

    @Column({type:'varchar', length:255, nullable:false})
    ComprobantePago:string;
}