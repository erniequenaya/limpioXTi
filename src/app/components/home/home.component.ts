import { Component, OnInit } from '@angular/core';
import { ejemplo } from  '../../ejemplo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ejemplo1: ejemplo = {
    id: 1,
    name: "ejemploHome"
  };
  inicio = "Ofrecemos servicios de limpieza de calidad, ajustado a tus necesidades, ya sea una oficina u otro tipo de inmueble, ponemos la mejor gente a tu disposición, contáctanos y trabajemos juntos!";
  imgPrincipal ="";
  imgBajada1 ="";
  imgBajada2 ="";
  constructor() { }

  ngOnInit() {
  }

}
