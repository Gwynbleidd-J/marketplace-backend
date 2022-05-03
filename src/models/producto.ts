import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CatPlantilla } from './plantilla';
import { CatCampanias } from './campanias';

@Entity()
export class CatProducto{
    @PrimaryGeneratedColumn('increment')
    idProducto:number;

    @OneToOne(() => CatPlantilla,{nullable:true})
    @JoinColumn({name:'idPlantilla', referencedColumnName:'idPlantilla'})
    plantilla:CatPlantilla;

    @OneToMany(() => CatCampanias, campania => campania.Producto)
    Campania:CatCampanias[];

    @Column({type:'varchar', length:255, nullable:false})
    NombreProducto:string;

    @Column({type:'varchar', length:255, nullable:false})
    SKU:string;
}