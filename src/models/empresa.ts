import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatCampanias } from './campanias';
import { CatDatosFiscales } from './datos-fiscales';
import { CatDireccion } from './direccion';
import { CatTipoEmpresa } from "./tipo-empresa";
import { LstUsuario } from "./usuario";

@Entity()
export class CatEmpresa{
    @PrimaryGeneratedColumn('increment')
    idEmpresa:number;
    
    @OneToOne(() => CatTipoEmpresa)
    @JoinColumn()
    TipoEmpresa:CatTipoEmpresa;

    @OneToOne(() => CatDatosFiscales)
    @JoinColumn()
    DatosFiscales:CatDatosFiscales;

    @ManyToOne(() => CatDireccion, direccion => direccion.Empresa)
    Direccion:CatDireccion;

    @OneToOne(() => CatCampanias)
    @JoinColumn()
    Campania:CatCampanias;

    @OneToOne(() => LstUsuario)
    @JoinColumn()
    Usuario:LstUsuario;

    @Column({type:'varchar', length:255, nullable:false})
    NombreEmpresa:string;
}