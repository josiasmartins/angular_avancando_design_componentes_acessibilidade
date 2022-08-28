import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService, ModalRef } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = "Flávio";
  public modalRef: ModalRef;
  public info = false;

  constructor(
    private modalService: ModalService,
  ) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
