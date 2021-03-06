/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './app.component.css.shim.ngstyle';
import * as import9 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/router_outlet_map';
import * as import16 from '@angular/core/src/linker/component_factory_resolver';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-root',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app-root',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [import8.styles];
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _RouterLinkWithHref_5_3:import9.Wrapper_RouterLinkWithHref;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkWithHref_8_3:import9.Wrapper_RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _vc_13:import10.ViewContainer;
  _RouterOutlet_13_5:import11.Wrapper_RouterOutlet;
  _arr_18:any;
  _arr_19:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_18 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_19 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Hello world!!',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,parentRenderNode,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_5_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_6 = this.renderer.createText(this._el_5,'Home',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,parentRenderNode,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_8_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_9 = this.renderer.createText(this._el_8,'Users',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,parentRenderNode,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_13 = new import10.ViewContainer(13,(null as any),this,this._el_13);
    this._RouterOutlet_13_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import15.RouterOutletMap,this.parentIndex),this._vc_13.vcRef,this.parentView.injectorGet(import16.ComponentFactoryResolver,this.parentIndex),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkWithHref_5_3.context; }
    if (((token === import17.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import18.RouterOutlet) && (13 === requestNodeIndex))) { return this._RouterOutlet_13_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this._arr_18('/');
    this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0,throwOnChange,false);
    this._RouterLinkWithHref_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_8_0_0:any = this._arr_19('/users');
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    this._RouterOutlet_13_5.ngDoCheck(this,this._el_13,throwOnChange);
    this._vc_13.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_5_3.checkHost(this,this,this._el_5,throwOnChange);
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
  }
  destroyInternal():void {
    this._vc_13.destroyNestedViews();
    this._RouterLinkWithHref_5_3.ngOnDestroy();
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterOutlet_13_5.ngOnDestroy();
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
}