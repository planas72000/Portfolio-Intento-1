import { Component, OnInit } from '@angular/core';
import { ServicioportfolioService } from 'src/app/servicios/servicioportfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private inyeccion: ServicioportfolioService) {
   
    inyeccion.obtenerDatos();
    
  }

  ngOnInit(): void {
  this.inyeccion.obtenerDatos().subscribe(data =>{
    
    this.miPorfolio=data;
  });
  }

}
