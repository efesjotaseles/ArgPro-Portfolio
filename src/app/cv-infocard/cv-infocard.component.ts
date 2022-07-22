import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-infocard',
  templateUrl: './cv-infocard.component.html',
  styleUrls: ['./cv-infocard.component.css']
})
export class CvInfocardComponent implements OnInit {

  @Input() titulo : string = "titulo";
  @Input() detalle : string = "descripcion";

  constructor() { }

  ngOnInit(): void {
  }

}
