import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { CatTarifa } from './tarifa';
import { CatCampanias } from './campanias';
import { CatEstatus } from './estatus';

@Entity()
export class CatMedio{
    @PrimaryGeneratedColumn('increment')
    idMedio:number;

    @OneToOne(() => CatEstatus, estatus => estatus.Medio, {nullable:false})
    @JoinColumn({name: 'idEstatus'})
    Estatus:CatEstatus;

    @OneToOne(() => CatCampanias, campania => campania.Medio, {nullable:true})
    Campania:CatCampanias;
    
    @Column({type:'varchar', length:50, nullable:false})
    NombreMedio:string;

    @Column({type:'varchar', length:100, nullable:false})
    FechaAlta:string;

    @Column({type:'varchar', length:50, nullable:true})
    Tipo:string;
}