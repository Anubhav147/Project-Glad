import { PlansService } from './available-plans.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './available-plans.component.html',
  styleUrls: ['./available-plans.component.css']
})
export class AvailablePlansComponent implements OnInit {


  plan: any;

  constructor(private service: PlansService, private router : Router) { }

  ngOnInit(): void {
    this.service.getAllInsuranceData().subscribe(data=>{
      this.plan = data;
    })
  }
  selectPlan(){
    this.router.navigate(['buyInsurance']);
  }

}