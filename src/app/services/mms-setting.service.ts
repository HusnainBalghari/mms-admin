import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MMSSetting } from '../models/mms-seting.model';

@Injectable({
  providedIn: 'root'
})
export class MMSSettingService {

  listController: string = "MMSSetting/"

  constructor(private httpClient: HttpClient) { }

  Get(id: number): Observable<MMSSetting> {
    return this.httpClient.get<MMSSetting>(this.listController + 'Get/'+ id);
  }

  GetAll(): Observable<MMSSetting[]> {
    return this.httpClient.get<MMSSetting[]>(this.listController + 'GetAll/');
  }
}
