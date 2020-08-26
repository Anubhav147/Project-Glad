import { ApproveClaim } from './../Entity/ApproveClaim';
import { Claim } from './../Entity/Claim';
import { ClaimInsuranceService } from './../claim-insurance.service';
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
    this.service.claimInsurance(this.claim).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  updateStatus(){
    this.service.updateStatus(this.approveClaim).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
  }

}
