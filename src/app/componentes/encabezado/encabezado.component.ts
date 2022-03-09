import { Component, OnInit } from '@angular/core';
import { ServicioportfolioService } from 'src/app/servicios/servicioportfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private inyeccion: ServicioportfolioService) {

    inyeccion.obtenerDatos();

   }

  ngOnInit(): void {
  }

}
