import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CatEmpresa } from './empresa';
import { CatTipoUsuario } from './tipo-usuario';
import { CatEstatus } from './estatus';
import { CatContacto } from './contacto';
import bcrypt  from "bcryptjs";

@Entity()
export class LstUsuario{
    @PrimaryGeneratedColumn('increment')
    idUsuario:number;

    @OneToOne(()=> CatTipoUsuario,{nullable:true, eager:true})
    @JoinColumn({name:'idTipoUsuario', referencedColumnName:'idTipoUsuario'})
    TipoUsuario:CatTipoUsuario;

    @OneToOne(() => CatEmpresa, {nullable:true, eager:true})
    @JoinColumn({name:'idEmpresa', referencedColumnName:'idEmpresa'})
    Empresa:CatEmpresa;

    @OneToOne(() => CatEstatus, {nullable:true, eager:true})
    @JoinColumn({name:'idEstatus', referencedColumnName:'idEstatus'})
    Estatus:CatEstatus

    @ManyToOne(() => CatContacto, contacto => contacto.usuario, {nullable:true, eager:true})
    @JoinColumn({name:'idContacto', referencedColumnName:'idContacto'})
    contacto:CatContacto;

    @Column({type:'varchar', length:255, nullable:false})
    NombreUsuario:string;

    @Column({type:'varchar', length:255, nullable:false})
    Contrasenia:string;

    @Column({type:'varchar', length:255, nullable:false, unique:true})
    Correo:string;

    public async encryptPassword(password:string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);

        //Método alternativo para la contraseña
        //const salt = await wait bcrypt.genSalt(10);
        //this.Contrasenia = bcrypt.hash(this.Contrasenia, salt);
    }

    public async validatePassword(password:string): Promise<boolean>{
        return await bcrypt.compare(password, this.Contrasenia);
    }
}