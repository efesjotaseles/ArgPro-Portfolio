import { Component, OnInit } from '@angular/core';
import { experiencias } from '../exp';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias = experiencias;
  

  constructor() { }

  ngOnInit(): void {
    console.log("experiencia works!");
    
  }

}
