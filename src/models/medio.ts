import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { CatTarifa } from './tarifa';

@Entity()
export class CatMedio{
    @PrimaryGeneratedColumn('increment')
    idMedio:number;
    
    @Column({type:'varchar', length:50, nullable:false})
    NombreMedio:string;

    @Column({type:'varchar', length:100, nullable:false})
    Fecha_Alta:string;

    @Column({type:'varchar', length:50, nullable:false})
    Tipo:string;
}