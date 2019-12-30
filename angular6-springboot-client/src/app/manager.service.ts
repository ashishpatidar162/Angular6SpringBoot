import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseUrlM = 'http://localhost:8080//api/v1/managers';

  constructor(private http: HttpClient) { }

  createManager(manager: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlM}`, manager);
  }
}
