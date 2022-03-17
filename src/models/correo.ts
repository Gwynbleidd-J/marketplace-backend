
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatCorreo{
    @PrimaryGeneratedColumn('increment')
    idCorreo:number;
    
    @Column({type:'varchar', length:255, nullable:false})
    Destino:string;

    @Column({type:'varchar', length:255, nullable:false})
    Asunto:string;

    @Column({type:'varchar', length:255, nullable:false})
    Cuerpo:string;

    @Column({type:'varchar', length:255, nullable:false})
    Archivo:string;

    @Column({type:'varchar', length:255, nullable:false})
    Fecha:string

    @Column({type:'bit'})
    Enviado:boolean
}