import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CatEmpresa } from "./empresa";

@Entity()
export class CatDireccion{
    @PrimaryGeneratedColumn('increment')
    idDireccion:number;

    @OneToMany(() => CatEmpresa, empresa =>empresa.Direccion)
    Empresa:CatEmpresa[];

    @Column({type:'varchar', length:50 , nullable:false})
    Estado:string;

    @Column({type:'varchar', length:100 , nullable:false})
    Municipio:string;

    @Column({type:'varchar', length:50 , nullable:false})
    Colonia:string;

    @Column({type:'varchar', length:100 , nullable:false})
    Calle:string;

    @Column({type:'varchar', length:100 , nullable:false})
    CodigoPostal:string;
}