import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habitacion } from '../interfaces/Habitacion';

@Injectable({
  providedIn: 'root'
})
export class ServiciosHabitacionService {

  public url:string='https://pruegaapi20231.vercel.app/'

  constructor(public servicioHabitacion:HttpClient) { }

  buscarHabitaciones():Observable<Habitacion[]>{
    let listahabitaciones:Habitacion[]=[]
    let urlServicio:string=this.url+"buscarhabitaciones"
    return this.servicioHabitacion.get(urlServicio)
    .pipe(
      map(function(elemento:any){
        elemento.habitaciones.forEach(function(habitacion:Habitacion){
          listahabitaciones.push(habitacion)
        })
        return listahabitaciones;
      })
    ) 
  }



}