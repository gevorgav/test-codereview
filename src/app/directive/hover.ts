import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostListener('mouseenter')
  hover() {
    this.el.nativeElement.classList.add('hover');
  }

  @HostListener('mouseleave')
  hoverLeave() {
    this.el.nativeElement.classList.remove('hover');
  }
  constructor(private el: ElementRef) {
  }
}
