import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LstUsuario } from "./usuario";

@Entity()
export class CatEncuesta{
    @PrimaryGeneratedColumn('increment')
    idEncuesta:number

    @ManyToOne(() => LstUsuario, user => user.Encuesta,{nullable:true})
    @JoinColumn({name:'idUsuario', referencedColumnName:'idUsuario'})
    Usuario: LstUsuario

    @Column({type:'varchar', length: 50, nullable: false})
    Giro:string

    @Column({type:'varchar', length: 50,nullable:false})
    NumEmpleados:string

    @Column({type:'varchar', length: 50,nullable:false})
    TipoNegocio:string

    @Column({type:'varchar', length: 50,nullable:false})
    IngresoMensual:string
}