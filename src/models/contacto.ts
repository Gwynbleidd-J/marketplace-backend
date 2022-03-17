import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LstUsuario } from './usuario';

@Entity()
export class CatContacto{
    @PrimaryGeneratedColumn('increment')
    idContacto:number;

    @OneToMany(() => LstUsuario, usuario => usuario.contacto)
    usuario:LstUsuario[];

    @Column({type:'varchar', length:40, nullable:false})
    TipoContacto:string;

    @Column({type:'varchar', length:100, nullable:false})
    Valor:string;
}