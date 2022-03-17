import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatEmpresa } from "./empresa";
import { CatEstatus } from "./estatus";
import { CatMedio } from "./medio";
import { CatProducto } from './producto';

@Entity()
export class CatCampanias{
    @PrimaryGeneratedColumn('increment')
    idCampanias:number;

    @OneToOne(() => CatEmpresa)
    @JoinColumn()
    Empresa:CatEmpresa;

    @ManyToOne(() => CatProducto, producto => producto.Campania) 
    Producto:CatProducto;

    @OneToOne(() => CatEstatus)
    @JoinColumn()
    Estatus:CatEstatus;

    @OneToOne(() => CatMedio)
    @JoinColumn()
    Medio:CatMedio;
    
    @Column({type:'varchar', length: 255, nullable:false})
    NombreCampania:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaRegistro:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaInicio:string;

    @Column({type:'varchar', length:50 , nullable:false})
    FechaFin:string;

    @Column({type:'integer', nullable:false})
    SucursalesContratadas:number;

    @Column({type:'integer', nullable:false})
    SegundosContratados:number;

    @Column({type:'integer', nullable:false})
    PrecioUnitario:number;
}
