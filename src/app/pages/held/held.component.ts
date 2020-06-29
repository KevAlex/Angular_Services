import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeldenzService } from 'src/app/services/heldenz.service';

@Component({
  selector: 'app-held',
  templateUrl: './held.component.html',
  styleUrls: ['./held.component.scss']
})
export class HeldComponent implements OnInit {

  id: number;
  hnd: any ={};
    
  constructor(private _activatedRoute: ActivatedRoute, private _heldenService: HeldenzService ) {

    this._activatedRoute.params.subscribe(data =>{
      this.id = data["id"]; // ejemplo de como se envia datos usando variables locales (id)
     this.hnd= this._heldenService.getHeld(data["id"]); 
    }
 
      )
  }
  

  ngOnInit(): void {
    console.log("Envio de dato usando el componente de service:",this.id);
  }

}
