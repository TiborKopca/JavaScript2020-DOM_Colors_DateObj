/*
Crear una funcionalidad en una web, donde el color de fondo cambie según el día.

2020 @ Tibor Kopca
*/
'use strict'

const MONDAY = '#6DB5C2';       //blue
const TUESDAY = '#257F8F';      //green-blue
const WEDNESDAY = '#A2F5D3';    //mint
const THURSDAY = '#FA6B68';     //red
const FRIDAY = '#C26D92';       //purple
const SATURDAY = '#69A676';     //green
const SUNDAY = '#2F1B42';       //purple

var day;
var bgColor;

function changeBackground() {               //pasamos a variable constante con color segun el dia

    day = new Date().getDay(); //returns 0-monday ... 6-sunday
    // console.log(day);
    switch (day) {
        case 0:
            bgColor = MONDAY
            break;
        case 1:
            bgColor = TUESDAY
            break;
        case 2:
            bgColor = WEDNESDAY
            break;
        case 3:
            bgColor = THURSDAY
            break;
        case 4: bgColor = FRIDAY
            break;
        case 5: bgColor = SATURDAY
            break;
        default:          
            bgColor = SUNDAY;
            break;
    }
    document.body.style.backgroundColor = bgColor;          //modificamos estilo del fondo
}


window.onload = function () {
    let date = new Date().toDateString();

    changeBackground();     //llamamos la funcion con cambio del fondo

    let info = this.document.createElement('h3');           //creamos titular h3
    let text = document.createTextNode(`Este bonito día de ${date} tenemos el color del fondo : ${bgColor}.`); //creamos texto
    info.appendChild(text);                                 //anadimos texto a elemento h3
    let body = document.getElementsByTagName('body')[0];    //definimos el elemento padre a todo que queremos anadir
    body.appendChild(info);                                 //pasamos nuestro elemento creado al DOM
}
