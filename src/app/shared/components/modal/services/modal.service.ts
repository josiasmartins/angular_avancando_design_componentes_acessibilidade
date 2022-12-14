import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalConfigInterface } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { BodyInjectorService } from '../../../services/body-injector';
import { ModalRef } from '../models/moda-ref';

@Injectable()
export class ModalService {

  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    /**
     *  ComponenteFactoryResolver
     *
     * @description
     *  Ele é capaz de criar fábricas responsáveis pela criação dinâmica de componentes.
     *  Cada fábrica criada pode criar quantos componentes daquele tipo de fábrica.
     */
    componentFactoryResolver: ComponentFactoryResolver,
    private bodyInjector: BodyInjectorService,
    private injector: Injector,
  ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.modalConfigI = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

/**
 *  ComponentRef e ModalRef
 *
 *  @description
 * O ComponentRef é um artefato com Angular que encapsula
 * uma instância do componente criado dinamicamente. Já ModalRef
 * é uma criação nossa que encapsula um ComponentRef
 * possuindo apenas o método close sem export a referência
 * para o desenvolvedor cliente da nossa API.
 */

