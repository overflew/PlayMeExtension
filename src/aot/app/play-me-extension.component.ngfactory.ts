/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/play-me-extension.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './play-me-extension.component.css';
import * as import12 from '@angular/router/src/directives/router_outlet';
import * as import13 from '@angular/router/src/router_outlet_map';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
var renderType_PlayMeExtensionAppComponent_Host:import0.RenderComponentType = (null as any);
class _View_PlayMeExtensionAppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PlayMeExtensionAppComponent_0_5:import3.PlayMeExtensionAppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayMeExtensionAppComponent_Host0,renderType_PlayMeExtensionAppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('play-me-extension-app',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PlayMeExtensionAppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PlayMeExtensionAppComponent_0_5 = new import3.PlayMeExtensionAppComponent(this.parentInjector.get(import8.Router),this._appEl_0.vcRef);
    this._appEl_0.initComponent(this._PlayMeExtensionAppComponent_0_5,[],compView_0);
    compView_0.create(this._PlayMeExtensionAppComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._appEl_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PlayMeExtensionAppComponent) && (0 === requestNodeIndex))) { return this._PlayMeExtensionAppComponent_0_5; }
    return notFoundResult;
  }
}
function viewFactory_PlayMeExtensionAppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PlayMeExtensionAppComponent_Host === (null as any))) { (renderType_PlayMeExtensionAppComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_PlayMeExtensionAppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PlayMeExtensionAppComponentNgFactory:import10.ComponentFactory<import3.PlayMeExtensionAppComponent> = new import10.ComponentFactory<import3.PlayMeExtensionAppComponent>('play-me-extension-app',viewFactory_PlayMeExtensionAppComponent_Host0,import3.PlayMeExtensionAppComponent);
const styles_PlayMeExtensionAppComponent:any[] = [import11.styles];
var renderType_PlayMeExtensionAppComponent:import0.RenderComponentType = (null as any);
class _View_PlayMeExtensionAppComponent0 extends import1.AppView<import3.PlayMeExtensionAppComponent> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _RouterOutlet_0_5:import12.RouterOutlet;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayMeExtensionAppComponent0,renderType_PlayMeExtensionAppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'router-outlet',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    this._RouterOutlet_0_5 = new import12.RouterOutlet(this.parentInjector.get(import13.RouterOutletMap),this._appEl_0.vcRef,this.parentInjector.get(import14.ComponentFactoryResolver),(null as any));
    this.init([],[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterOutlet) && (0 === requestNodeIndex))) { return this._RouterOutlet_0_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._RouterOutlet_0_5.ngOnDestroy();
  }
}
export function viewFactory_PlayMeExtensionAppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PlayMeExtensionAppComponent> {
  if ((renderType_PlayMeExtensionAppComponent === (null as any))) { (renderType_PlayMeExtensionAppComponent = viewUtils.createRenderComponentType('C:/data/solutions/PlayMeExtension/src/app/play-me-extension.component.html',0,import9.ViewEncapsulation.None,styles_PlayMeExtensionAppComponent,{})); }
  return new _View_PlayMeExtensionAppComponent0(viewUtils,parentInjector,declarationEl);
}