import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.directive';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusTrapModule
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
