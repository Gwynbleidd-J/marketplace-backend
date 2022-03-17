import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatEstatus{
    @PrimaryGeneratedColumn('increment')
    idEstatus:number;

    @Column({type:'varchar', length:30, nullable:false})
    Descripcion:string;
}