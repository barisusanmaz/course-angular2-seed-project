/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './user.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/common/src/localization';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from './user.component.ngfactory';
import * as import7 from '@angular/core/src/i18n/tokens';
import * as import8 from './user.component';
import * as import9 from '@angular/router/src/router_config_loader';
class UserModuleInjector extends import0.NgModuleInjector<import1.UserModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _UserModule_2:import1.UserModule;
  __NgLocalization_3:import4.NgLocaleLocalization;
  __ROUTES_4:any[];
  constructor(parent:import5.Injector) {
    super(parent,[import6.UserComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_3():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == null)) { (this.__NgLocalization_3 = new import4.NgLocaleLocalization(this.parent.get(import7.LOCALE_ID))); }
    return this.__NgLocalization_3;
  }
  get _ROUTES_4():any[] {
        if ((this.__ROUTES_4 == null)) { (this.__ROUTES_4 = [[{
          path: '',
          component: import8.UserComponent
        }
    ]]); }
    return this.__ROUTES_4;
  }
  createInternal():import1.UserModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._UserModule_2 = new import1.UserModule();
    return this._UserModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.UserModule)) { return this._UserModule_2; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import9.ROUTES)) { return this._ROUTES_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UserModuleNgFactory:import0.NgModuleFactory<import1.UserModule> = new import0.NgModuleFactory(UserModuleInjector,import1.UserModule);