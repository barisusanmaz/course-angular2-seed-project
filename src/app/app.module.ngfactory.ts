/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/core/src/application_init';
import * as import8 from '@angular/core/src/testability/testability';
import * as import9 from '@angular/core/src/application_ref';
import * as import10 from '@angular/core/src/linker/compiler';
import * as import11 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import12 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import13 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import14 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import15 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import16 from '@angular/core/src/animation/animation_queue';
import * as import17 from '@angular/core/src/linker/view_utils';
import * as import18 from '@angular/platform-browser/src/browser/title';
import * as import19 from '@angular/common/src/location/location';
import * as import20 from '@angular/router/src/url_tree';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import23 from '@angular/router/src/router_preloader';
import * as import24 from '@angular/core/src/di/injector';
import * as import25 from './home.component.ngfactory';
import * as import26 from './app.component.ngfactory';
import * as import27 from '@angular/core/src/i18n/tokens';
import * as import28 from '@angular/core/src/application_tokens';
import * as import29 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import30 from '@angular/platform-browser/src/dom/events/key_events';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import33 from '@angular/common/src/location/platform_location';
import * as import34 from '@angular/common/src/location/location_strategy';
import * as import35 from './home.component';
import * as import36 from '@angular/router/src/url_handling_strategy';
import * as import37 from '@angular/router/src/route_reuse_strategy';
import * as import38 from '@angular/router/src/router';
import * as import39 from '@angular/core/src/console';
import * as import40 from '@angular/core/src/error_handler';
import * as import41 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import42 from '@angular/platform-browser/src/dom/animation_driver';
import * as import43 from '@angular/core/src/render/api';
import * as import44 from '@angular/core/src/security';
import * as import45 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import46 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import47 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import48 from '@angular/router/src/router_config_loader';
import * as import49 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _AppModule_5:import1.AppModule;
  __LOCALE_ID_6:any;
  __NgLocalization_7:import6.NgLocaleLocalization;
  _ErrorHandler_8:any;
  _ApplicationInitStatus_9:import7.ApplicationInitStatus;
  _Testability_10:import8.Testability;
  _ApplicationRef__11:import9.ApplicationRef_;
  __ApplicationRef_12:any;
  __Compiler_13:import10.Compiler;
  __APP_ID_14:any;
  __DOCUMENT_15:any;
  __HAMMER_GESTURE_CONFIG_16:import11.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_17:any[];
  __EventManager_18:import12.EventManager;
  __DomSharedStylesHost_19:import13.DomSharedStylesHost;
  __AnimationDriver_20:any;
  __DomRootRenderer_21:import14.DomRootRenderer_;
  __NgProbeToken_22:any[];
  __RootRenderer_23:any;
  __DomSanitizer_24:import15.DomSanitizerImpl;
  __Sanitizer_25:any;
  __AnimationQueue_26:import16.AnimationQueue;
  __ViewUtils_27:import17.ViewUtils;
  __IterableDiffers_28:any;
  __KeyValueDiffers_29:any;
  __SharedStylesHost_30:any;
  __Title_31:import18.Title;
  __ROUTER_CONFIGURATION_32:any;
  __LocationStrategy_33:any;
  __Location_34:import19.Location;
  __UrlSerializer_35:import20.DefaultUrlSerializer;
  __RouterOutletMap_36:import21.RouterOutletMap;
  __NgModuleFactoryLoader_37:import22.SystemJsNgModuleLoader;
  __ROUTES_38:any[];
  __Router_39:any;
  __ActivatedRoute_40:any;
  _NoPreloading_41:import23.NoPreloading;
  _PreloadingStrategy_42:any;
  _RouterPreloader_43:import23.RouterPreloader;
  __PreloadAllModules_44:import23.PreloadAllModules;
  __ROUTER_INITIALIZER_45:any;
  __APP_BOOTSTRAP_LISTENER_46:any[];
  constructor(parent:import24.Injector) {
    super(parent,[
      import25.HomeComponentNgFactory,
      import26.AppComponentNgFactory
    ]
    ,[import26.AppComponentNgFactory]);
  }
  get _LOCALE_ID_6():any {
    if ((this.__LOCALE_ID_6 == null)) { (this.__LOCALE_ID_6 = import3._localeFactory(this.parent.get(import27.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_6;
  }
  get _NgLocalization_7():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == null)) { (this.__NgLocalization_7 = new import6.NgLocaleLocalization(this._LOCALE_ID_6)); }
    return this.__NgLocalization_7;
  }
  get _ApplicationRef_12():any {
    if ((this.__ApplicationRef_12 == null)) { (this.__ApplicationRef_12 = this._ApplicationRef__11); }
    return this.__ApplicationRef_12;
  }
  get _Compiler_13():import10.Compiler {
    if ((this.__Compiler_13 == null)) { (this.__Compiler_13 = new import10.Compiler()); }
    return this.__Compiler_13;
  }
  get _APP_ID_14():any {
    if ((this.__APP_ID_14 == null)) { (this.__APP_ID_14 = import28._appIdRandomProviderFactory()); }
    return this.__APP_ID_14;
  }
  get _DOCUMENT_15():any {
    if ((this.__DOCUMENT_15 == null)) { (this.__DOCUMENT_15 = import4._document()); }
    return this.__DOCUMENT_15;
  }
  get _HAMMER_GESTURE_CONFIG_16():import11.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_16 == null)) { (this.__HAMMER_GESTURE_CONFIG_16 = new import11.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_16;
  }
  get _EVENT_MANAGER_PLUGINS_17():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_17 == null)) { (this.__EVENT_MANAGER_PLUGINS_17 = [
      new import29.DomEventsPlugin(),
      new import30.KeyEventsPlugin(),
      new import11.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_16)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_17;
  }
  get _EventManager_18():import12.EventManager {
    if ((this.__EventManager_18 == null)) { (this.__EventManager_18 = new import12.EventManager(this._EVENT_MANAGER_PLUGINS_17,this.parent.get(import31.NgZone))); }
    return this.__EventManager_18;
  }
  get _DomSharedStylesHost_19():import13.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_19 == null)) { (this.__DomSharedStylesHost_19 = new import13.DomSharedStylesHost(this._DOCUMENT_15)); }
    return this.__DomSharedStylesHost_19;
  }
  get _AnimationDriver_20():any {
    if ((this.__AnimationDriver_20 == null)) { (this.__AnimationDriver_20 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_20;
  }
  get _DomRootRenderer_21():import14.DomRootRenderer_ {
    if ((this.__DomRootRenderer_21 == null)) { (this.__DomRootRenderer_21 = new import14.DomRootRenderer_(this._DOCUMENT_15,this._EventManager_18,this._DomSharedStylesHost_19,this._AnimationDriver_20,this._APP_ID_14)); }
    return this.__DomRootRenderer_21;
  }
  get _NgProbeToken_22():any[] {
    if ((this.__NgProbeToken_22 == null)) { (this.__NgProbeToken_22 = [import5.routerNgProbeToken()]); }
    return this.__NgProbeToken_22;
  }
  get _RootRenderer_23():any {
    if ((this.__RootRenderer_23 == null)) { (this.__RootRenderer_23 = import32._createConditionalRootRenderer(this._DomRootRenderer_21,this.parent.get(import32.NgProbeToken,(null as any)),this._NgProbeToken_22)); }
    return this.__RootRenderer_23;
  }
  get _DomSanitizer_24():import15.DomSanitizerImpl {
    if ((this.__DomSanitizer_24 == null)) { (this.__DomSanitizer_24 = new import15.DomSanitizerImpl()); }
    return this.__DomSanitizer_24;
  }
  get _Sanitizer_25():any {
    if ((this.__Sanitizer_25 == null)) { (this.__Sanitizer_25 = this._DomSanitizer_24); }
    return this.__Sanitizer_25;
  }
  get _AnimationQueue_26():import16.AnimationQueue {
    if ((this.__AnimationQueue_26 == null)) { (this.__AnimationQueue_26 = new import16.AnimationQueue(this.parent.get(import31.NgZone))); }
    return this.__AnimationQueue_26;
  }
  get _ViewUtils_27():import17.ViewUtils {
    if ((this.__ViewUtils_27 == null)) { (this.__ViewUtils_27 = new import17.ViewUtils(this._RootRenderer_23,this._Sanitizer_25,this._AnimationQueue_26)); }
    return this.__ViewUtils_27;
  }
  get _IterableDiffers_28():any {
    if ((this.__IterableDiffers_28 == null)) { (this.__IterableDiffers_28 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_28;
  }
  get _KeyValueDiffers_29():any {
    if ((this.__KeyValueDiffers_29 == null)) { (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_29;
  }
  get _SharedStylesHost_30():any {
    if ((this.__SharedStylesHost_30 == null)) { (this.__SharedStylesHost_30 = this._DomSharedStylesHost_19); }
    return this.__SharedStylesHost_30;
  }
  get _Title_31():import18.Title {
    if ((this.__Title_31 == null)) { (this.__Title_31 = new import18.Title()); }
    return this.__Title_31;
  }
  get _ROUTER_CONFIGURATION_32():any {
    if ((this.__ROUTER_CONFIGURATION_32 == null)) { (this.__ROUTER_CONFIGURATION_32 = {}); }
    return this.__ROUTER_CONFIGURATION_32;
  }
  get _LocationStrategy_33():any {
    if ((this.__LocationStrategy_33 == null)) { (this.__LocationStrategy_33 = import5.provideLocationStrategy(this.parent.get(import33.PlatformLocation),this.parent.get(import34.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_32)); }
    return this.__LocationStrategy_33;
  }
  get _Location_34():import19.Location {
    if ((this.__Location_34 == null)) { (this.__Location_34 = new import19.Location(this._LocationStrategy_33)); }
    return this.__Location_34;
  }
  get _UrlSerializer_35():import20.DefaultUrlSerializer {
    if ((this.__UrlSerializer_35 == null)) { (this.__UrlSerializer_35 = new import20.DefaultUrlSerializer()); }
    return this.__UrlSerializer_35;
  }
  get _RouterOutletMap_36():import21.RouterOutletMap {
    if ((this.__RouterOutletMap_36 == null)) { (this.__RouterOutletMap_36 = new import21.RouterOutletMap()); }
    return this.__RouterOutletMap_36;
  }
  get _NgModuleFactoryLoader_37():import22.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_37 == null)) { (this.__NgModuleFactoryLoader_37 = new import22.SystemJsNgModuleLoader(this._Compiler_13,this.parent.get(import22.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_37;
  }
  get _ROUTES_38():any[] {
      if ((this.__ROUTES_38 == null)) { (this.__ROUTES_38 = [[
        {
          path: '',
          component: import35.HomeComponent
        }
        ,
        {
          path: 'users',
          loadChildren: './users/user.module#UserModule'
        }

      ]
    ]); }
    return this.__ROUTES_38;
  }
  get _Router_39():any {
    if ((this.__Router_39 == null)) { (this.__Router_39 = import5.setupRouter(this._ApplicationRef_12,this._UrlSerializer_35,this._RouterOutletMap_36,this._Location_34,this,this._NgModuleFactoryLoader_37,this._Compiler_13,this._ROUTES_38,this._ROUTER_CONFIGURATION_32,this.parent.get(import36.UrlHandlingStrategy,(null as any)),this.parent.get(import37.RouteReuseStrategy,(null as any)))); }
    return this.__Router_39;
  }
  get _ActivatedRoute_40():any {
    if ((this.__ActivatedRoute_40 == null)) { (this.__ActivatedRoute_40 = import5.rootRoute(this._Router_39)); }
    return this.__ActivatedRoute_40;
  }
  get _PreloadAllModules_44():import23.PreloadAllModules {
    if ((this.__PreloadAllModules_44 == null)) { (this.__PreloadAllModules_44 = new import23.PreloadAllModules()); }
    return this.__PreloadAllModules_44;
  }
  get _ROUTER_INITIALIZER_45():any {
    if ((this.__ROUTER_INITIALIZER_45 == null)) { (this.__ROUTER_INITIALIZER_45 = import5.initialRouterNavigation(this._Router_39,this._ApplicationRef_12,this._RouterPreloader_43,this._ROUTER_CONFIGURATION_32)); }
    return this.__ROUTER_INITIALIZER_45;
  }
  get _APP_BOOTSTRAP_LISTENER_46():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_46 == null)) { (this.__APP_BOOTSTRAP_LISTENER_46 = [this._ROUTER_INITIALIZER_45]); }
    return this.__APP_BOOTSTRAP_LISTENER_46;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import38.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._AppModule_5 = new import1.AppModule();
    this._ErrorHandler_8 = import4.errorHandler();
    this._ApplicationInitStatus_9 = new import7.ApplicationInitStatus(this.parent.get(import7.APP_INITIALIZER,(null as any)));
    this._Testability_10 = new import8.Testability(this.parent.get(import31.NgZone));
    this._ApplicationRef__11 = new import9.ApplicationRef_(this.parent.get(import31.NgZone),this.parent.get(import39.Console),this,this._ErrorHandler_8,this,this._ApplicationInitStatus_9,this.parent.get(import8.TestabilityRegistry,(null as any)),this._Testability_10);
    this._NoPreloading_41 = new import23.NoPreloading();
    this._PreloadingStrategy_42 = this._NoPreloading_41;
    this._RouterPreloader_43 = new import23.RouterPreloader(this._Router_39,this._NgModuleFactoryLoader_37,this._Compiler_13,this,this._PreloadingStrategy_42);
    return this._AppModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import1.AppModule)) { return this._AppModule_5; }
    if ((token === import27.LOCALE_ID)) { return this._LOCALE_ID_6; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import40.ErrorHandler)) { return this._ErrorHandler_8; }
    if ((token === import7.ApplicationInitStatus)) { return this._ApplicationInitStatus_9; }
    if ((token === import8.Testability)) { return this._Testability_10; }
    if ((token === import9.ApplicationRef_)) { return this._ApplicationRef__11; }
    if ((token === import9.ApplicationRef)) { return this._ApplicationRef_12; }
    if ((token === import10.Compiler)) { return this._Compiler_13; }
    if ((token === import28.APP_ID)) { return this._APP_ID_14; }
    if ((token === import41.DOCUMENT)) { return this._DOCUMENT_15; }
    if ((token === import11.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_16; }
    if ((token === import12.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_17; }
    if ((token === import12.EventManager)) { return this._EventManager_18; }
    if ((token === import13.DomSharedStylesHost)) { return this._DomSharedStylesHost_19; }
    if ((token === import42.AnimationDriver)) { return this._AnimationDriver_20; }
    if ((token === import14.DomRootRenderer)) { return this._DomRootRenderer_21; }
    if ((token === import9.NgProbeToken)) { return this._NgProbeToken_22; }
    if ((token === import43.RootRenderer)) { return this._RootRenderer_23; }
    if ((token === import15.DomSanitizer)) { return this._DomSanitizer_24; }
    if ((token === import44.Sanitizer)) { return this._Sanitizer_25; }
    if ((token === import16.AnimationQueue)) { return this._AnimationQueue_26; }
    if ((token === import17.ViewUtils)) { return this._ViewUtils_27; }
    if ((token === import45.IterableDiffers)) { return this._IterableDiffers_28; }
    if ((token === import46.KeyValueDiffers)) { return this._KeyValueDiffers_29; }
    if ((token === import13.SharedStylesHost)) { return this._SharedStylesHost_30; }
    if ((token === import18.Title)) { return this._Title_31; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_32; }
    if ((token === import34.LocationStrategy)) { return this._LocationStrategy_33; }
    if ((token === import19.Location)) { return this._Location_34; }
    if ((token === import20.UrlSerializer)) { return this._UrlSerializer_35; }
    if ((token === import21.RouterOutletMap)) { return this._RouterOutletMap_36; }
    if ((token === import47.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_37; }
    if ((token === import48.ROUTES)) { return this._ROUTES_38; }
    if ((token === import38.Router)) { return this._Router_39; }
    if ((token === import49.ActivatedRoute)) { return this._ActivatedRoute_40; }
    if ((token === import23.NoPreloading)) { return this._NoPreloading_41; }
    if ((token === import23.PreloadingStrategy)) { return this._PreloadingStrategy_42; }
    if ((token === import23.RouterPreloader)) { return this._RouterPreloader_43; }
    if ((token === import23.PreloadAllModules)) { return this._PreloadAllModules_44; }
    if ((token === import5.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_45; }
    if ((token === import28.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_46; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__11.ngOnDestroy();
    this._RouterPreloader_43.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);