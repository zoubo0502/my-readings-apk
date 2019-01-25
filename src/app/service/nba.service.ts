import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  constructor(private http: HttpClient) {}

  getHupuNBA(): Observable<string> {
    return this.http.get(`${environment.hupuUrl}/`, {responseType: 'text'});
  }
  getNewsDetails(url: string): Observable<string> {
    return this.http.get(`${environment.hupuBBSUrl}/`, {responseType: 'text'});
  }
}
