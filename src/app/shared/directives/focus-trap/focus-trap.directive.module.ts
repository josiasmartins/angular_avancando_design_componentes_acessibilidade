import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  // '[appFocusTrap]': usa como atributo
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusableElement: HTMLElement = null;
  private lastFocusElement: HTMLElement = null;

  constructor(
    private elementRef: ElementRef<any>
  ) {}

  public ngAfterViewInit(): void {
    const focusableElements = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])
      `);
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusElement = focusableElements[focusableElements - 1];
    this.firstFocusableElement.focus();
  }

}