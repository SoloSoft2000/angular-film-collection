import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus implements AfterViewInit {
  private element = inject(ElementRef);
  appAutofocus = input<string>('');

  ngAfterViewInit(): void {
    const selector = this.appAutofocus();
    const parent = this.element.nativeElement;
    if (selector) {
      parent.querySelector(selector)?.focus();
    } else {
      parent.focus();
    }
  }
}
