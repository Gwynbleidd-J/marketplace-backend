import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CatTipoUsuario{
    @PrimaryGeneratedColumn('increment')
    idTipoUsuario:number;
    
    @Column({type:'varchar', length:30, nullable:false})
    Descripcion:string;
}