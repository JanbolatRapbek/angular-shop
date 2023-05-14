import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'a';
  @Input() fontWeight: string = 'n';
  @Input('appStyle') backgroundColor: string = 'black';

  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.backgroundColor
    );
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
  }
}
