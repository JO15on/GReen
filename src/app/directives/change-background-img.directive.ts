import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundImg]'
})
export class ChangeBackgroundImgDirective {

  constructor() { }

  @HostListener('focus', ['$event.target'])
  @HostListener('mouseenter', ['$event.target']) onMouseOver(e: any) {
    e.style.backgroundImage = `url('assets/${e.id}_icon_hover.png')`
  }

  @HostListener('blur', ['$event.target'])
  @HostListener('mouseleave', ['$event.target']) onMouseLeave(e: any) {
    if (document.activeElement !== e) {
      e.style.backgroundImage = `url('assets/${e.id}_icon.png')`
    }
  }

}
