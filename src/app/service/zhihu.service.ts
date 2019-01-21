import { ZhihuNews } from './../../../.history/src/app/model/ZhihuNews_20190120192720';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZhihuRecent } from '../model/zhihuRecent';
import { environment } from 'src/environments/environment';
import { ZhihuDetails } from '../model/ZhihuDetails';

@Injectable({
  providedIn: 'root'
})
export class ZhihuService {
  baseUrl = environment.zhihuUrl;
  constructor(private http: HttpClient) {}

  getHotNews(): Observable<ZhihuRecent> {
    return this.http.get<ZhihuRecent>(`${this.baseUrl}/3/news/hot`);
  }
  getNewsDetails(news: ZhihuNews): Observable<ZhihuDetails> {
    return this.http.get<ZhihuDetails>(
      `${this.baseUrl}/2/news/${news.news_id}`
    );
  }
}
