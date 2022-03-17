import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatEmpresa } from "./empresa";
import { CatMedio } from "./medio";
import { CatTipoTarifa } from "./tipo-tarifa";
import { CatTipoTarifaTemporada } from './tipo-tarifa-temporada';

@Entity()
export class CatTarifa{
    @PrimaryGeneratedColumn('increment')
    idTarifa:number;

    @OneToOne(() => CatMedio)
    @JoinColumn()
    Medio:CatMedio;

    @OneToOne(() => CatEmpresa)
    @JoinColumn()
    Empresa:CatEmpresa;

    @OneToOne(() => CatTipoTarifa)
    @JoinColumn()
    TipoTarifa:CatTipoTarifa;

    @OneToOne(()=> CatTipoTarifaTemporada)
    @JoinColumn()
    TipoTarifaTemporada:CatTipoTarifaTemporada;


    @Column({type:'integer', nullable:false})
    DescuentoMaximo:number;

    @Column({type:'varchar', length:4, nullable:false})
    Anio:string;

    @Column({type:'int', nullable:false})
    Segundos:number;

    @Column({type:'varchar', length: 3, nullable:false})
    Canal:string;
}