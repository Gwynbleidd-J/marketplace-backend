import { ViewEntity, Column} from 'typeorm'

@ViewEntity({name: 'Vista_CatNegocio'})
export class VistaCatNegocio{
    @Column({name:'Id_Negocio'})
    idNegocio:number;

    @Column({name:'Nombre_Negocio'})
    NombreNegocio:string;

    @Column({name:'Unidad_Negocio'})
    UnidadNegocio:string;

    @Column({name:'Sufijo_Tabla'})
    SufijoTabla:string;

    @Column({name:'Activo'})
    Activo:number;

    @Column({name:'Tipo_usuarios'})
    TipoUsuarios:string

    @Column({name:'Inicio_Id'})
    idInicio:number;

    @Column({name:'Fin_Id'})
    idFin:number;

    @Column({name:'NegocioVersiones'})
    NegocioVersiones:string;

    @Column({name:'varNegocio'})
    varNegocio:string;

    @Column({name:'Pautaje'})
    Pautaje:string;

    @Column({name:'Monitoreo'})
    Monitoreo:string;

    @Column({name:'Hora_Inicial'})
    HoraInicial:string;

    @Column({name:'Hora_Final'})
    HoraFinal:string;

    @Column({name:'Loops_Base'})
    LoopsBase:string;

    @Column({name:'Dias_Habiles'})
    DiasHabiles:string;

    @Column({name:'Bitacora_Suc_Padre'})
    BitacoraSucPadre:string;

    @Column({name:'Etiqueta_Suc_Padre'})
    EtiquetaSucPadre:string;

    @Column({name:'segundos_capacitacion'})
    SegundosCapacitacion:string;

    @Column({name:'usa_capacitacion_ws'})
    UsaCapacitacionWs:string;

    @Column({name:'CobroxPlayer'})
    CobroPorPlayer:number;

    @Column({name:'Tiempo_Loop'})
    TiempoLoop:string;

    @Column({name:'Tiempo_Entretenimiento'})
    TiempoEntretenimiento:string;

    @Column({name:'Tiempo_Comercial'})
    TiempoComercial:string;

}