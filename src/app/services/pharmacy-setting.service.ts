import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PharmacySetting } from '../models/pharmacy-setting.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacySettingService {
  listController: string = "PharmacySetting/"

  constructor(private httpClient: HttpClient) { }

  Get(id: number): Observable<PharmacySetting> {
    return this.httpClient.get<PharmacySetting>(this.listController + 'Get/'+ id);
  }

  GetAll(): Observable<PharmacySetting[]> {
    return this.httpClient.get<PharmacySetting[]>(this.listController + 'GetAll/');
  }
}
