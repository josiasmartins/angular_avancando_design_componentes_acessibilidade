import { Component, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
 public modalConfigI: ModalConfigInterface;

}
