import { Injectable, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from '../interfaces/modal-config';

@Injectable()
export class ModalService {

  // templateRef: Referencia do template
  // templateRef: refencia do conteudo que precisa estar dentro do modal
  public open(config: ModalConfigInterface): ModalRef {
    console.log('open called');
    return new ModalRef()
  }
}

export class ModalRef {

  public close(): void {
    console.log('close called')
  }
}
