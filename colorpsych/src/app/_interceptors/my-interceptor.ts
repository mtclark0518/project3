import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler):
        Observable<HttpEvent<any>> {

        if (req.body) {

        // const cloneReq = req.clone({ body: req.body.replace('filter', 'completed') });
        const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
        return next.handle(secureReq);
        }
        return next.handle(req);
    }
}
