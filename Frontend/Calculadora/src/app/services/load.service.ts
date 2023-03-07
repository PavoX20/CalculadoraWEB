import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Operacion } from '../models/operacion';
import { Global } from './Global';


@Injectable({
    providedIn:'root'
})
export class LoadService{
    
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    

    public postOperacion(data: any) {
        let params=JSON.stringify(data);
        console.log(params)
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+"guardar-operacion/", params, {headers:headers});
      }

      public getOperaciones(){
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+"historial");
    }

    
    
}