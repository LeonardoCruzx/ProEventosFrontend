import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
      Tema: "angular",
      Local: "São Paulo",
    },
    {
      Tema: "angular2",
      Local: "rj",
    },
    {
      Tema: "angular3",
      Local: "poa",
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
