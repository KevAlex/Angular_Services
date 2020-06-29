import { Component, OnInit } from '@angular/core';
import { HeldenzService, helInterface } from 'src/app/services/heldenz.service';

@Component({
  selector: 'app-helden',
  templateUrl: './helden.component.html',
  styleUrls: ['./helden.component.scss']
})
export class HeldenComponent implements OnInit {

  hdn: helInterface[] = []; 
  
  constructor(private _heldenService: HeldenzService) { }

//incorporo el servicio en el constructor
  ngOnInit(): void {
    this.hdn = this._heldenService.getHelden();
    console.log(this.hdn);
  }

}
