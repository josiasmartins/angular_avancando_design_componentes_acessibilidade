import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ModalService {

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    console.log('open called');
    return new ModalRef()
  }
}

export interface ModalConfigInterface {
  templateRef: TemplateRef<any>;
  title: string;
}


export class ModalRef {

  public close(): void {
    console.log('close called')
  }
}
