import { AfterViewInit, Component, HostBinding, TemplateRef } from '@angular/core';
import { ModalConfigInterface } from './interfaces/modal-config';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements AfterViewInit {
  @HostBinding('@fade') fade = true;
  // @HostBinding('class.show') public show = false;
  public modalConfigI: ModalConfigInterface;

  public ngAfterViewInit(): void {
    // setTimeout(() => this.show = true);
  }
}
