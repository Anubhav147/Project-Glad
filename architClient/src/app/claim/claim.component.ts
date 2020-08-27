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

  constructor(private service: ClaimInsuranceService) { }

  claimInsurance(){
    this.service.claimInsurance(this.claimCustomerId(this.claim)).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  updateStatus(){
    this.service.updateStatus(this.approveClaimCustomerId(this.approveClaim)).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  claimCustomerId(claim){
    claim.customerId = sessionStorage.getItem('id');
    return claim;
  }

  approveClaimCustomerId(approveClaim){
    approveClaim.customerId = sessionStorage.getItem('id');
    return approveClaim;
  }

  ngOnInit(): void {
  }

}
