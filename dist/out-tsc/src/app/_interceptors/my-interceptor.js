// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { AuthenticationService } from '../_services';
// import { AuthGuard } from '../_guards';
// @Injectable()
// export class MyInterceptor implements HttpInterceptor {
//     constructor(
//         private auth: AuthGuard,
//         private authenticationService: AuthenticationService) {}
//     intercept(
//         req: HttpRequest<any>,
//         next: HttpHandler)
//         :Observable<HttpEvent<any>> {
//             const authHeader = this.authenticationService.getAuthorizationHeader();
//             const authReq = req.clone({
//                 setHeaders: {
//                     Authorization: authHeader
//                 }
//             });
// if (req.body) {
// console.log('poooooooooop');
// const cloneReq = req.clone({ body: req.body.replace('filter', 'completed') });
// const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
//         return next.handle(req);
//     }
// }
//# sourceMappingURL=my-interceptor.js.map