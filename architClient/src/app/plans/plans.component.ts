import { PlansService } from './plans.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {


  plan: any;

  constructor(private service: PlansService) { }

  ngOnInit(): void {
    this.service.getAllInsuranceData().subscribe(data=>{
      this.plan = data;
    })
  }

}
