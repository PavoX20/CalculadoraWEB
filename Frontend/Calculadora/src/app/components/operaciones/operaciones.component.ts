import { Component, OnInit } from '@angular/core';
import { Operacion } from 'src/app/models/operacion';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
  providers: [LoadService]
})
export class OperacionesComponent implements OnInit{
  
  public historial:Array<Operacion>=[]
  public valor1:string
  public valor2:string
  public operacion:string
  public showValue2:boolean=true
  constructor(
    private _loadservices:LoadService
  ){
    this.operacion=""
    this.valor1=""
    this.valor2=""
  }
  ngOnInit(): void {
    this.obtenerOperacion();
  }

  

  getSelectedValue(event:any){
    
    this.operacion=event.target.value
    
  
  }

  public guardarOperacion(){

    if(Number(this.valor2)==0){
      alert("Recuerda que la división por 0 no existe")
    }
    let data:any={valor1:this.valor1, valor2:this.valor2, operacion:this.operacion}
    
    this._loadservices.postOperacion(data).subscribe({
      next: response => {
        
      
      this.obtenerOperacion()

      },
      error: error => {
        
      this.obtenerOperacion()
      },
      complete: () => console.info('complete') 
  })
  
  }

  public obtenerOperacion(){
    
    this._loadservices.getOperaciones
    this._loadservices.getOperaciones().subscribe({
      next: response => {

        
      let data:any
      
      data=response
      
      this.historial=data.result
      this.historial=this.historial.reverse()
      for(let i=0;i<this.historial.length;i++){
        switch (this.historial[i].operacion){
          case "Suma":
              this.historial[i].operacion="+"
            break;
          case "Resta":
              this.historial[i].operacion="-"
            break;
          case "Multiplicación":
              this.historial[i].operacion="x"
            break;
            case "División":
              this.historial[i].operacion="÷"
            break;
            case "Potencia":
              this.historial[i].operacion="^"
            break;
            case "Raíz Cuadrada":
              this.historial[i].operacion=""
              this.historial[i].valor1="√"+this.historial[i].valor1
              this.historial[i].valor2=""
            break;
        }
      }
      
      },
      error: error => console.log("Error, no se han podido cargar los datos"),
      complete: () => console.info('complete') 
  })



  }

  

}
