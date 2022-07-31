import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface AcercaDe {
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {
  rootURL = 'localhost:8080';


  constructor(private http: HttpClient) { }

  getAcercaDe(){
    return this.http.get<AcercaDe>(this.rootURL+'/acercade');
  }
}
