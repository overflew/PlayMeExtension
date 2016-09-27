/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../../app/shared/tabset/tab/tab.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './tab.component.css.shim';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from '@angular/core/src/linker/template_ref';
var renderType_TabComponent_Host:import0.RenderComponentType = (null as any);
class _View_TabComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TabComponent_0_4:import3.TabComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TabComponent_Host0,renderType_TabComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('tab',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TabComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TabComponent_0_4 = new import3.TabComponent();
    this._appEl_0.initComponent(this._TabComponent_0_4,[],compView_0);
    compView_0.create(this._TabComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TabComponent) && (0 === requestNodeIndex))) { return this._TabComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_TabComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TabComponent_Host === (null as any))) { (renderType_TabComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_TabComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const TabComponentNgFactory:import9.ComponentFactory<import3.TabComponent> = new import9.ComponentFactory<import3.TabComponent>('tab',viewFactory_TabComponent_Host0,import3.TabComponent);
const styles_TabComponent:any[] = [import10.styles];
var renderType_TabComponent:import0.RenderComponentType = (null as any);
class _View_TabComponent0 extends import1.AppView<import3.TabComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import11.NgIf;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TabComponent0,renderType_TabComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import12.TemplateRef_(this._appEl_0,viewFactory_TabComponent1);
    this._NgIf_0_6 = new import11.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[this._anchor_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import11.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.active;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_TabComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TabComponent> {
  if ((renderType_TabComponent === (null as any))) { (renderType_TabComponent = viewUtils.createRenderComponentType('C:/data/solutions/PlayMeExtension/src/app/shared/tabset/tab/tab.component.html',1,import8.ViewEncapsulation.Emulated,styles_TabComponent,{})); }
  return new _View_TabComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_TabComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TabComponent1,renderType_TabComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','tab-pane');
    this.renderer.setElementAttribute(this._el_0,'role','tabpanel');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.renderer.projectNodes(this._el_0,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._text_2 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_TabComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_TabComponent1(viewUtils,parentInjector,declarationEl);
}