import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CatTipoEmpresa{
    @PrimaryGeneratedColumn('increment')
    idTipoEmpresa:number;

    @Column({type:'varchar', length:50, nullable:false})
    Descripcion:string;
}