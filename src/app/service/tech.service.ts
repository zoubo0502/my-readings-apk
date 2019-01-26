import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.wangyiUrl;
  getArtList(): Observable<string> {
    return this.http.get(
      this.baseUrl +
        '/touch/reconstruct/article/list/BA8D4A3Rwangning/10-15.html',
      { responseType: 'text' }
    );
  }

  getNewsDetails(url: string): Observable<string> {
    return this.http.get(this.baseUrl + url, { responseType: 'text' });
  }
}
