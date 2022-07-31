import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface AcercaDe {
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {
  rootURL = 'https://fast-beyond-06413.herokuapp.com/';


  constructor(private http: HttpClient) { }

  getAcercaDe(){
    return this.http.get<AcercaDe>(this.rootURL + '/acercade');
  }
}
