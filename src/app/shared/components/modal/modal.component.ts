import { AfterViewInit, Component, HostBinding, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  // @HostBinding('class.show') public show = false;
  public modalConfigI: ModalConfigInterface;

  public ngAfterViewInit(): void {
    // setTimeout(() => this.show = true);
  }
}
