import { ComponentFactory, ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    private injector: Injector,
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    const componentRef = this.componentFactory.create(this.injector);
    componentRef;
    console.log('open called');
    return new ModalRef()
  }
}

export class ModalRef {

  public close(): void {
    console.log('close called')
  }
}
