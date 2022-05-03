import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatEmpresa } from "./empresa";
import { CatMedio } from "./medio";
import { CatTipoTarifa } from "./tipo-tarifa";
import { CatTipoTarifaTemporada } from './tipo-tarifa-temporada';

@Entity()
export class CatTarifa{
    @PrimaryGeneratedColumn('increment')
    idTarifa:number;

    @OneToOne(() => CatMedio, {nullable:true})
    @JoinColumn({name:'idMedio', referencedColumnName:'idMedio'})
    Medio:CatMedio;

    @OneToOne(() => CatEmpresa, {nullable:true})
    @JoinColumn({name:'idEmpresa', referencedColumnName:'idEmpresa'})
    Empresa:CatEmpresa;

    @OneToOne(() => CatTipoTarifa, {nullable:true})
    @JoinColumn({name:'idTipoTarifa', referencedColumnName:'idTipoTarifa'})
    TipoTarifa:CatTipoTarifa;

    @OneToOne(()=> CatTipoTarifaTemporada, {nullable:true})
    @JoinColumn({name:'idTipoTarifaTemporada', referencedColumnName:'idTipoTarifaTemporada'})
    TipoTarifaTemporada:CatTipoTarifaTemporada;


    @Column({type:'int', nullable:false})
    DescuentoMaximo:number;

    @Column({type:'varchar', length:4, nullable:false})
    Anio:string;

    @Column({type:'int', nullable:false})
    Segundos:number;

    @Column({type:'varchar', length: 3, nullable:false})
    Canal:string;

    @Column({type: 'int', nullable:true})
    idRed:number
}