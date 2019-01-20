import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZhihuRecent } from '../model/zhihuRecent';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZhihuService {
  constructor(private http: HttpClient) {}

  getHotNews(): Observable<ZhihuRecent> {
    const url = environment.zhihuUrl;
    return this.http.get<ZhihuRecent>(`${url}/3/news/hot`);
  }
}
