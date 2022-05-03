import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CatEmpresa } from './empresa';
import { CatTipoUsuario } from './tipo-usuario';
import { CatEstatus } from './estatus';
import { CatContacto } from './contacto';
import { CatEncuesta } from './encuesta';
import bcrypt  from "bcryptjs";

@Entity()
export class LstUsuario{
    @PrimaryGeneratedColumn('increment')
    idUsuario:number;

    @OneToOne(()=> CatTipoUsuario,{nullable:true})
    @JoinColumn({name:'idTipoUsuario', referencedColumnName:'idTipoUsuario'})
    TipoUsuario:CatTipoUsuario; //Si es pyme o no se registra en base

    @OneToOne(() => CatEmpresa, {nullable:true})
    @JoinColumn({name:'idEmpresa', referencedColumnName:'idEmpresa'})
    Empresa:CatEmpresa; // todavia no se llega ahí

    @OneToOne(() => CatEstatus, {nullable:true})
    @JoinColumn({name:'idEstatus', referencedColumnName:'idEstatus'})
    Estatus:CatEstatus // por si el usuario está activo

    @ManyToOne(() => CatContacto, contacto => contacto.usuario, {nullable:true})
    @JoinColumn({name:'idContacto', referencedColumnName:'idContacto'}) //contacto que registro el usuario
    contacto:CatContacto;

    @OneToMany(() => CatEncuesta, encuesta => encuesta.Usuario, {nullable: true})
    @JoinColumn({name:'idEncuesta', referencedColumnName:'idEncuesta'})
    Encuesta: LstUsuario[];

    @Column({type:'varchar', length:255, nullable:false, unique: true})
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