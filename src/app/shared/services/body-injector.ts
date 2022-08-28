import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyInjectorService {

  constructor(
    // ApplicationRef: te dá acesso aplicacao toda
    private appRef: ApplicationRef
  ) {}

  public stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    // insertBefore: insere antes
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    /**
     * attachView
     * permite inserir (attach) um componente criado dinâmicamente para detectar mudanças
     */
    /**
     * hostView
     * É uma referência para o template do componente encapsulado por ComponentRef.
     */
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView  as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    return domElement;
  }
}
