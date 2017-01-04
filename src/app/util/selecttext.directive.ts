import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[selectText]'
})
export class SelectTextDirective {

  @HostListener('click') onMouseClick() {
    let element = this._elementRef.nativeElement;

    if (element.value.length > 0) {
      element.setSelectionRange(0, element.value.length);
    }
  }

  constructor(private _elementRef: ElementRef) { }

}
