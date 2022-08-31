import { Directive, ElementRef, AfterViewInit, HostListener } from '@angular/core';

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
      `) as Array<HTMLElement>;
      
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  // @HostListener: permite ouvir eventos sobre elementos host
  // ['$event']: objeto do evento disparado pelo keydown
  @HostListener('keydown', ['$event'])  
  public manageTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey && document.activeElement === this.firstFocusableElement) {
      this.lastFocusElement.focus();
      event.preventDefault()
    } else if (document.activeElement === this.lastFocusElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }
  }

}