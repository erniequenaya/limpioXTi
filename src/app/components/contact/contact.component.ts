import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  contactanosHeader = "Para Solicitar una Visita de Diagnóstico, una Cotización o  mayor información, contatáctate con nosotros.";
  constructor() { }

  ngOnInit() {
  }

}
