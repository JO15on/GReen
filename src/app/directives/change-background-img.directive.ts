import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[changeBackgroundImg]'
})
export class ChangeBackgroundImgDirective {

  constructor() { }

  @HostListener('focus', ['$event.target'])
  @HostListener('mouseenter', ['$event.target']) onMouseOver(btn: any) {
    btn.style.backgroundImage = `url('assets/${btn.id}_icon_hover.png')`
  }

  @HostListener('blur', ['$event.target'])
  @HostListener('mouseleave', ['$event.target']) onMouseLeave(btn: any) {
    if (document.activeElement !== btn) {
      btn.style.backgroundImage = `url('assets/${btn.id}_icon.png')`
    }
  }
}
