import { Component } from '@angular/core';

import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent {

  public habitaciones?:Habitacion[]=[]
  public constructor(){
   

  }

  

}
