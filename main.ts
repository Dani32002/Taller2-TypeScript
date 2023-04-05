import {Serie} from './serie.js';
import { series } from './data.js';

let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;
let foto:HTMLElement = document.getElementById('imagen')!;
let titulo:HTMLElement = document.getElementById('titulo')!;
let descripcion: HTMLElement = document.getElementById('descripcion')!;
let enlace: HTMLElement = document.getElementById('enlace')!;



cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;
createBotones();



function createBotones(){
    series.forEach(c=>{
        let boton = document.getElementById(`${c.id}`)!;
        boton.onclick = () => {alterCard(boton.id)};
    });
}

function alterCard(id: string){
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];
    foto.setAttribute('src', serie.imagen);
    titulo.innerHTML = `${serie.nombre}`;
    descripcion.innerHTML = `${serie.descripcion}`;
    enlace.setAttribute('href', `${serie.paginaWeb}`);
    enlace.innerHTML = `${serie.paginaWeb}`;

}


function cargarFilas(): void{
    series.forEach(c => crearFila(c));
}

function crearFila(serie: Serie):void{
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde; hover">
        <a id = "${serie.id}">${serie.nombre}</a>
    </td>
    <td>
        ${serie.cadena}
    </td>
    <td>
        ${serie.temporadas}
    </td>`);
    componente.appendChild(fila);
}

function calcularPromedio(): string{
    let promedio = 0;
    series.forEach(s => promedio += s.temporadas);
    promedio /= series.length;
    let promedioT = promedio.toFixed(2);
    return promedioT;
}