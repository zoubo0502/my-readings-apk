import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
    constructor(public loadingController: LoadingController) { }
    loading: any;
    async presentLoading() {
         this.loading = await this.loadingController.create({
            spinner: 'dots',
            translucent: true,
            duration: 100,
            cssClass: 'my-loading-class'
        });
        return await this.loading.present();
      }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                event => {
                  this.presentLoading();
                  if (event instanceof HttpResponse) {
                  }
                },
                error => {
                }
              ),
            finalize(() => {

            })
        );
    }
}
