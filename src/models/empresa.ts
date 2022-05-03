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
    
    @OneToOne(() => CatTipoEmpresa, {nullable:true})
    @JoinColumn({name:'idTipoEmpresa', referencedColumnName:'idTipoEmpresa'})
    TipoEmpresa:CatTipoEmpresa;

    @OneToOne(() => CatDatosFiscales, {nullable:true})
    @JoinColumn({name:'idDatosFiscales', referencedColumnName:'idDatosFiscales'})
    DatosFiscales:CatDatosFiscales;

    @OneToOne(() => CatCampanias, campania => campania.Empresa, {nullable:true})
    Campania:CatCampanias;

    @ManyToOne(() => CatDireccion, direccion => direccion.Empresa, {nullable:true})
    @JoinColumn({name:'idDireccion', referencedColumnName:'idDireccion'})
    Direccion:CatDireccion;
    
    @OneToOne(() => LstUsuario)
    @JoinColumn({name:'idUsuario', referencedColumnName:'idUsuario'})
    Usuario:LstUsuario;

    @Column({type:'varchar', length:255, nullable:false})
    NombreEmpresa:string;
}