import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { BodyInjectorService } from '../../services/body-injector';

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
    componentFactoryResolver: ComponentFactoryResolver,
    private bodyInjector: BodyInjectorService
  ) {
    componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.modalConfigI = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
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

export class ModalRef {

  constructor(
    private componentRef: ComponentRef<ModalComponent>
  ) {};

  public close(): void {
    console.log('close called')
    this.componentRef.destroy();
  }
}
