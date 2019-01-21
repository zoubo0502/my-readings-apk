import { MyNewsPage } from './my-news.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-readings',
    component: MyNewsPage,
    children: [
      {
        path: 'weibo',
        children: [
          {
            path: '',
            loadChildren: '../news/weibo/weibo.module#WeiboPageModule'
          }
        ]
      },
      {
        path: 'zhihu',
        children: [
          {
            path: '',
            loadChildren: '../news/zhihu/zhihu.module#ZhihuPageModule'
          }
        ]
      },
      {
        path: 'nba',
        children: [
          {
            path: '',
            loadChildren: '../news/nba/nba.module#NbaPageModule'
          }
        ]
      },
      {
        path: 'tech',
        children: [
          {
            path: '',
            loadChildren: '../news/tech/tech.module#TechPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/my-readings/zhihu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/my-readings/zhihu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNewsRoutingModule {}
