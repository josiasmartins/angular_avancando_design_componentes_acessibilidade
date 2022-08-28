import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    /**
     *  ComponenteFactoryResolver
     *
     * @description
     *  Ele é capaz de criar fábricas responsáveis pela criação dinâmica de componentes.
     *  Cada fábrica criada pode criar quantos componentes daquele tipo de fábrica.
     */
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.modalConfigI = config;
    console.log('open called');
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {

  constructor(
    private componentRef: ComponentRef<ModalComponent>
  ) {};

  public close(): void {
    console.log('close called')
    this.componentRef.destroy();
  }
}
