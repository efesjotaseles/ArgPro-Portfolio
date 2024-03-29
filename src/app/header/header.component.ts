import { Component, OnInit } from '@angular/core';
import { AcercaDe, AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService]
})
export class HeaderComponent implements OnInit {

  acercaDe: string = 'Programador fullstack';
  /** 
  acercaDe : AcercaDe | undefined;
  message : string | undefined;
  */

  showAcercaDe(){
    //this.appService.getAcercaDe().subscribe((data: AcercaDe) => this.acercaDe ={...data});
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    console.log("Header works!");
    this.showAcercaDe();
    //this.message = this.acercaDe?.message;
    
  }

}
