import {Directive, ElementRef, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('myHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private backgroundColor="white";
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
