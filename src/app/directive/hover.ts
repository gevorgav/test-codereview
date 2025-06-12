import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostListener('mouseenter')
  hover() {
    console.log('hover');
    this.el.nativeElement.classList.add('hover');
  }
  constructor(private el: ElementRef) {
  }
}
