import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {
  
  private lastFocusedElement: Element;
  
  public ngOnInit(): void {
    /**
     *  document.activeElement
     * @description
     *  Nos dá uma referência para o elemento com focus dentro do documento (página) exibida.
     */
    this.lastFocusedElement = document.activeElement;
  }

  public ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }

}