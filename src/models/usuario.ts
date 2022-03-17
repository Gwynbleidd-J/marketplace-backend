import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CatEmpresa } from './empresa';
import { CatTipoUsuario } from './tipo-usuario';
import { CatEstatus } from './estatus';
import { CatContacto } from './contacto';

@Entity()
export class LstUsuario{
    @PrimaryGeneratedColumn('increment')
    idUsuario:number;

    @OneToOne(()=> CatTipoUsuario)
    @JoinColumn()
    TipoUsuario:CatTipoUsuario;

    @OneToOne(() => CatEmpresa)
    @JoinColumn()
    Empresa:CatEmpresa;

    @OneToOne(() => CatEstatus)
    @JoinColumn()
    Estatus:CatEstatus

    @ManyToOne(() => CatContacto, contacto => contacto.usuario)
    contacto:CatContacto;

    @Column({type:'varchar', length:255, nullable:false})
    NombreUsuario:string;

    @Column({type:'varchar', length:255, nullable:false})
    Contrasenia:string;

    @Column({type:'varchar', length:255, nullable:false})
    Correo:string;
}