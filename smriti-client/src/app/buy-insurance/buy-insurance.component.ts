import { Router } from '@angular/router';
import { Vehicle } from './../entity/Vehicle';

import { BuyInsuranceService } from './../buy-insurance.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})

export class BuyInsuranceComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();

  constructor(private service: BuyInsuranceService, private router: Router) { }

  buyInsurance(){
    this.service.buyInsurance(this.vehicle).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
  }

}