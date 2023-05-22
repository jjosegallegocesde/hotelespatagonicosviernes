import { Component } from '@angular/core';

import { Habitacion } from '../interfaces/Habitacion';
import { ServiciosHabitacionService } from '../services/servicios-habitacion.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent {

  public habitaciones?:Habitacion[]=[]
  public fotos?:string[]=[]
  public constructor(public servicioHabitacion:ServiciosHabitacionService){
   
    servicioHabitacion.buscarHabitaciones()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.habitaciones=respuesta
    })

  }

  

}
