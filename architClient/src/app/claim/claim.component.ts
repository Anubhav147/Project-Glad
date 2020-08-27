import { Router } from '@angular/router';
import { ClaimInsuranceService } from './claim-insurance.service';

import { ApproveClaim } from './../Entity/ApproveClaim';
import { Claim } from './../Entity/Claim';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'claim-insurance',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claim: Claim = new Claim();
  approveClaim: ApproveClaim = new ApproveClaim();

  constructor(private service: ClaimInsuranceService, private router: Router) { }

  claimInsurance(){
    this.service.claimInsurance(this.claimCustomerId(this.claim)).subscribe(data =>{
      alert(JSON.stringify(data));
    })
    this.router.navigate(['claimStatus']);
  }

  claimCustomerId(claim){
    claim.customerId = sessionStorage.getItem('id');
    return claim;
  }

  ngOnInit(): void {
  }

}
