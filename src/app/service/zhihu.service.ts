
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZhihuRecent } from '../model/zhihuRecent';
import { environment } from 'src/environments/environment';
import { ZhihuDetails } from '../model/ZhihuDetails';
import { ZhihuLatestNews } from '../model/ZhihuLatest';
import { ZhihuHotNews } from '../model/ZhihuNews';

@Injectable({
  providedIn: 'root'
})
export class ZhihuService {

  baseUrl = environment.zhihuUrl;
  constructor(private http: HttpClient) {}

  getHotNews(): Observable<ZhihuRecent> {
    return this.http.get<ZhihuRecent>(`${this.baseUrl}/3/news/hot`);
  }

  getLatestNews(): Observable<ZhihuLatestNews> {
    return this.http.get<ZhihuLatestNews>(`${this.baseUrl}/4/news/latest`);
  }

  getNewsDetails(newsId: number): Observable<ZhihuDetails> {
    return this.http.get<ZhihuDetails>(
      `${this.baseUrl}/2/news/${newsId}`
    );
  }
}
