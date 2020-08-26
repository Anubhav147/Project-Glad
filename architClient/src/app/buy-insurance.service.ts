import { Vehicle } from './Entity/Vehicle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyInsuranceService {

  constructor(private http: HttpClient) { }

  buyInsurance(vehicle: Vehicle){
    return this.http.post('http://localhost:8080/buyInsurance', vehicle);
  }
}