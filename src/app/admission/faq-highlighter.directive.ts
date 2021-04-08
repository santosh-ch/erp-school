import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFaqHighlighter]'
})
export class FaqHighlighterDirective implements OnInit {

  @HostBinding("class.highlight-border") isMouseIn: boolean;
  @Input('appFaqHighlighter') content: string = "";
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'aliceblue';
    // renderer.setStyle(el.nativeElement,'backgroundColor','aliceblue');
    renderer.addClass(el.nativeElement, 'faqbg');
    this.isMouseIn = false;
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement.querySelector('.' + this.content), 'hide');
  }

  @HostListener('mouseover') showContent() {
    let elAnswer = this.el.nativeElement.querySelector('.' + this.content);
    this.renderer.removeClass(elAnswer, 'hide');
    this.isMouseIn = true;
  }

  @HostListener('mouseout') hideContent() {
    let elAnswer = this.el.nativeElement.querySelector('.' + this.content);
    this.renderer.addClass(elAnswer, 'hide');
    this.isMouseIn = false;
  }

}
