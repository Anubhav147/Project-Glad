import { ApproveClaim } from './Entity/ApproveClaim';
import { Claim } from './Entity/Claim';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimInsuranceService {

  constructor(private http: HttpClient) { }

  claimInsurance(claim: Claim){
    return this.http.post('http://localhost:8080/addClaimInsurance', claim);
  }

  updateStatus(approveClaim: ApproveClaim){
    return this.http.post('http://localhost:8080/updateClaimStatus', approveClaim);
  }
}