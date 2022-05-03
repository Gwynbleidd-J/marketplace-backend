//*INTERFACES PARA SACAR EL INVENTARIO POR PLAYER
export interface Inventario {
    FechaInicio: Date;
    FechaFin:    Date;
    Sucursal:    Sucursal[];
}

export interface Sucursal {
    idSucursal: number;
}

