import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatEmpresa } from "./empresa";
import { CatEstatus } from "./estatus";
import { CatMedio } from "./medio";
import { CatProducto } from './producto';

@Entity()
export class CatCampanias{
    @PrimaryGeneratedColumn('increment')
    idCampanias:number;

    @OneToOne(() => CatEmpresa, empresa => empresa.Campania, { nullable:true })
    @JoinColumn({name: 'idEmpresa', referencedColumnName:'idEmpresa'})
    Empresa:CatEmpresa;

    @ManyToOne(() => CatProducto, producto => producto.Campania, { nullable:true}) 
    @JoinColumn({name:'idProducto', referencedColumnName:'idProducto'})
    Producto:CatProducto;

    @OneToOne(() => CatEstatus, estatus => estatus.Campania, {nullable:true}) 
    @JoinColumn({name:'idEstatus', referencedColumnName:'idEstatus'})
    Estatus:CatEstatus;

    @OneToOne(() => CatMedio, medio => medio.Campania, {nullable:true})
    @JoinColumn({name: 'idMedio', referencedColumnName:'idMedio'})
    Medio:CatMedio;
    
    @Column({type:'varchar', length: 255, nullable:false})
    NombreCampania:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaRegistro:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaInicio:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaFin:string;

    @Column({type:'int', nullable:false})
    SucursalesContratadas:number;

    @Column({type:'int', nullable:false})
    SegundosContratados:number;

    @Column({type:'int', nullable:false})
    PrecioUnitario:number;
}
