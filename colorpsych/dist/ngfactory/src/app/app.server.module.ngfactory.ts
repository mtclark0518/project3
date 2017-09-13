/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app.server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './user/user.component.ngfactory';
import * as i4 from './user/user-dash/user-dash.component.ngfactory';
import * as i5 from './landing/landing.component.ngfactory';
import * as i6 from './login/login.component.ngfactory';
import * as i7 from './signup/signup.component.ngfactory';
import * as i8 from './create-by-color/create-by-color.component.ngfactory';
import * as i9 from './create-by-attribute-dismiss/create-by-attribute-dismiss.component.ngfactory';
import * as i10 from './create-by-attribute-choose/create-by-attribute-choose.component.ngfactory';
import * as i11 from './by-color-result/by-color-result.component.ngfactory';
import * as i12 from './about/about.component.ngfactory';
import * as i13 from './app.component.ngfactory';
import * as i14 from '@angular/http';
import * as i15 from '@angular/platform-server';
import * as i16 from '@angular/common/http';
import * as i17 from '@angular/common';
import * as i18 from '@angular/platform-browser';
import * as i19 from '@angular/animations/browser';
import * as i20 from '@angular/platform-browser/animations';
import * as i21 from '@angular/animations';
import * as i22 from '@angular/forms';
import * as i23 from '../../../../src/app/_services/authentication.service';
import * as i24 from '../../../../src/app/_services/user.service';
import * as i25 from '../../../../src/app/_guards/auth-guard';
import * as i26 from '@angular/router';
import * as i27 from '../../../../src/app/_services/alert.service';
import * as i28 from '../../../../src/app/_services/by-attribute.service';
import * as i29 from '../../../../src/app/user/user.component';
import * as i30 from '../../../../src/app/user/user-dash/user-dash.component';
import * as i31 from '../../../../src/app/landing/landing.component';
import * as i32 from '../../../../src/app/login/login.component';
import * as i33 from '../../../../src/app/signup/signup.component';
import * as i34 from '../../../../src/app/create-by-color/create-by-color.component';
import * as i35 from '../../../../src/app/create-by-attribute-dismiss/create-by-attribute-dismiss.component';
import * as i36 from '../../../../src/app/create-by-attribute-choose/create-by-attribute-choose.component';
import * as i37 from '../../../../src/app/by-color-result/by-color-result.component';
import * as i38 from '../../../../src/app/about/about.component';
import * as i39 from '../../../../src/app/user/user-routing/user-routing.module';
import * as i40 from '../../../../src/app/user/user.module';
import * as i41 from '../../../../src/app/app.routing.module';
import * as i42 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.UserComponentNgFactory,i4.UserDashComponentNgFactory,i5.LandingComponentNgFactory,
              i6.LoginComponentNgFactory,i7.SignupComponentNgFactory,i8.CreateByColorComponentNgFactory,
              i9.CreateByAttributeDismissComponentNgFactory,i10.CreateByAttributeChooseComponentNgFactory,
              i11.ByColorResultComponentNgFactory,i12.AboutComponentNgFactory,i13.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i14.BrowserXhr,
          i15.ɵc,([] as any[])),i0.ɵmpd(4608,i14.ResponseOptions,i14.BaseResponseOptions,
          ([] as any[])),i0.ɵmpd(4608,i14.XSRFStrategy,i15.ɵd,([] as any[])),i0.ɵmpd(4608,
          i14.XHRBackend,i14.XHRBackend,[i14.BrowserXhr,i14.ResponseOptions,i14.XSRFStrategy]),
          i0.ɵmpd(4608,i14.RequestOptions,i14.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i14.Http,i15.ɵe,[i14.XHRBackend,i14.RequestOptions]),i0.ɵmpd(4608,i16.HttpXsrfTokenExtractor,
              i16.ɵg,[i17.DOCUMENT,i0.PLATFORM_ID,i16.ɵe]),i0.ɵmpd(4608,i16.ɵh,i16.ɵh,
              [i16.HttpXsrfTokenExtractor,i16.ɵf]),i0.ɵmpd(5120,i16.HTTP_INTERCEPTORS,
              (p0_0:any) => {
                return [p0_0];
              },[i16.ɵh]),i0.ɵmpd(4608,i16.XhrFactory,i15.ɵc,([] as any[])),i0.ɵmpd(4608,
              i16.HttpXhrBackend,i16.HttpXhrBackend,[i16.XhrFactory]),i0.ɵmpd(6144,
              i16.HttpBackend,(null as any),[i16.HttpXhrBackend]),i0.ɵmpd(5120,i16.HttpHandler,
              i15.ɵf,[i16.HttpBackend,[2,i16.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i16.HttpClient,
              i16.HttpClient,[i16.HttpHandler]),i0.ɵmpd(4608,i16.ɵd,i16.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i17.NgLocalization,
              i17.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i18.DomSanitizer,i18.ɵe,[i17.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i18.DomSanitizer]),i0.ɵmpd(4608,i18.HAMMER_GESTURE_CONFIG,
              i18.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i18.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i18.ɵDomEventsPlugin(p0_0),new i18.ɵKeyEventsPlugin(p1_0),
                    new i18.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i17.DOCUMENT,i17.DOCUMENT,i17.DOCUMENT,i18.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i18.EventManager,i18.EventManager,[i18.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i18.ɵDomSharedStylesHost,i18.ɵDomSharedStylesHost,
              [i17.DOCUMENT]),i0.ɵmpd(4608,i18.ɵDomRendererFactory2,i18.ɵDomRendererFactory2,
              [i18.EventManager,i18.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i15.ɵb,i15.ɵb,
              [i18.DOCUMENT,[2,i18.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i18.ɵSharedStylesHost,
              (null as any),[i15.ɵb]),i0.ɵmpd(4608,i15.ɵServerRendererFactory2,i15.ɵServerRendererFactory2,
              [i0.NgZone,i18.DOCUMENT,i18.ɵSharedStylesHost]),i0.ɵmpd(4608,i19.AnimationDriver,
              i19.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i19.ɵAnimationStyleNormalizer,
              i20.ɵd,([] as any[])),i0.ɵmpd(4608,i19.ɵAnimationEngine,i20.ɵb,[i19.AnimationDriver,
              i19.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i15.ɵa,
              [i15.ɵServerRendererFactory2,i19.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i18.Meta,i18.Meta,
              [i17.DOCUMENT]),i0.ɵmpd(4608,i18.Title,i18.Title,[i17.DOCUMENT]),i0.ɵmpd(4608,
              i21.AnimationBuilder,i20.ɵBrowserAnimationBuilder,[i0.RendererFactory2]),
          i0.ɵmpd(4608,i22.ɵi,i22.ɵi,([] as any[])),i0.ɵmpd(4608,i23.AuthenticationService,
              i23.AuthenticationService,[i14.Http]),i0.ɵmpd(4608,i24.UserService,i24.UserService,
              [i14.Http]),i0.ɵmpd(4608,i25.AuthGuard,i25.AuthGuard,[i26.Router,i23.AuthenticationService,
              i27.AlertService,i24.UserService]),i0.ɵmpd(5120,i26.ActivatedRoute,i26.ɵf,
              [i26.Router]),i0.ɵmpd(4608,i26.NoPreloading,i26.NoPreloading,([] as any[])),
          i0.ɵmpd(6144,i26.PreloadingStrategy,(null as any),[i26.NoPreloading]),i0.ɵmpd(135680,
              i26.RouterPreloader,i26.RouterPreloader,[i26.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i26.PreloadingStrategy]),i0.ɵmpd(4608,i26.PreloadAllModules,
              i26.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i26.ROUTER_INITIALIZER,
              i26.ɵi,[i26.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i26.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i28.ByAttributeService,i28.ByAttributeService,
              ([] as any[])),i0.ɵmpd(512,i14.HttpModule,i14.HttpModule,([] as any[])),
          i0.ɵmpd(512,i16.HttpClientXsrfModule,i16.HttpClientXsrfModule,([] as any[])),
          i0.ɵmpd(512,i16.HttpClientModule,i16.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i17.CommonModule,i17.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i18.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i26.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i26.ɵg,i26.ɵg,[i0.Injector]),i0.ɵmpd(256,i0.APP_ID,
              'colorpsych',([] as any[])),i0.ɵmpd(2048,i18.ɵTRANSITION_ID,(null as any),
              [i0.APP_ID]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,
              p2_0:any,p2_1:any,p2_2:any) => {
            return [i18.ɵc(p0_0,p0_1),i26.ɵh(p1_0),i18.ɵf(p2_0,p2_1,p2_2)];
          },[[2,i18.NgProbeToken],[2,i0.NgProbeToken],i26.ɵg,i18.ɵTRANSITION_ID,i17.DOCUMENT,
              i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i18.BrowserModule,
              i18.BrowserModule,[[3,i18.BrowserModule]]),i0.ɵmpd(512,i20.NoopAnimationsModule,
              i20.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i15.ServerModule,
              i15.ServerModule,([] as any[])),i0.ɵmpd(512,i22.ɵba,i22.ɵba,([] as any[])),
          i0.ɵmpd(512,i22.FormsModule,i22.FormsModule,([] as any[])),i0.ɵmpd(1024,
              i26.ɵa,i26.ɵd,[[3,i26.Router]]),i0.ɵmpd(512,i26.UrlSerializer,i26.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i26.ChildrenOutletContexts,i26.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i26.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i17.LocationStrategy,i26.ɵc,[i17.PlatformLocation,[2,i17.APP_BASE_HREF],
              i26.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i17.Location,i17.Location,[i17.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i26.ROUTES,() => {
            return [[{path:'users',component:i29.UserComponent,children:[{path:'',
                children:[{path:':email',component:i30.UserDashComponent}]}]}],[{path:'',
                component:i31.LandingComponent},{path:'login',component:i32.LoginComponent},
                {path:'signup',component:i33.SignupComponent},{path:'create-by-color',
                    component:i34.CreateByColorComponent},{path:'create-by-attribute-dismiss',
                    component:i35.CreateByAttributeDismissComponent},{path:'create-by-attribute-choose',
                    component:i36.CreateByAttributeChooseComponent},{path:'by-color-result',
                    component:i37.ByColorResultComponent},{path:'about',component:i38.AboutComponent},
                {path:'**',redirectTo:''}]];
          },([] as any[])),i0.ɵmpd(1024,i26.Router,i26.ɵe,[i0.ApplicationRef,i26.UrlSerializer,
              i26.ChildrenOutletContexts,i17.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i26.ROUTES,i26.ROUTER_CONFIGURATION,[2,i26.UrlHandlingStrategy],
              [2,i26.RouteReuseStrategy]]),i0.ɵmpd(512,i26.RouterModule,i26.RouterModule,
              [[2,i26.ɵa],[2,i26.Router]]),i0.ɵmpd(512,i39.UserRoutingModule,i39.UserRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i40.UserModule,i40.UserModule,([] as any[])),
          i0.ɵmpd(512,i41.AppRoutingModule,i41.AppRoutingModule,([] as any[])),i0.ɵmpd(512,
              i42.AppModule,i42.AppModule,([] as any[])),i0.ɵmpd(512,i1.AppServerModule,
              i1.AppServerModule,([] as any[])),i0.ɵmpd(256,i16.ɵe,'XSRF-TOKEN',([] as any[])),
          i0.ɵmpd(256,i16.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL1RoZVREcml2ZS93ZGktd29yay9wcm9qZWN0My9jb2xvcnBzeWNoL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvVGhlVERyaXZlL3dkaS13b3JrL3Byb2plY3QzL2NvbG9ycHN5Y2gvc3JjL2FwcC9hcHAuc2VydmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
