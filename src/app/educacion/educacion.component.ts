import { Component, OnInit } from '@angular/core';
import { educaciones } from '../edu';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones = educaciones;

  constructor() { }

  ngOnInit(): void {
    console.log("educacion works!");
    
  }

}
