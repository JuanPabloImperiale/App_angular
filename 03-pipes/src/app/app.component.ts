import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Juan Pablo';

  nombre2 = 'juAn paBLo impERiale';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.2352;

  salario = 1234.5;

  heroe = {

    nombre: 'Logan',
    clave: 'Wlaverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: '20'
    }
  };

  varlorDePromesa = new Promise( (resolve, reject) => {
      setTimeout( () => resolve('LLego la data !'), 3500);

  });

  fecha = new Date();

  video = 'RU_SGkSG0Aw';

  activar = true;
}
