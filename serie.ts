export class Serie {
    id: number;
    nombre: string;
    cadena: string;
    temporadas: number;
    descripcion:string;
    paginaWeb: string;
    imagen: string;
    constructor(id: number, nombre: string,cadena: string, temporadas: number, descripcion:string, paginaWeb: string, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.cadena = cadena;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.paginaWeb = paginaWeb;
        this.imagen = imagen;
    }
}