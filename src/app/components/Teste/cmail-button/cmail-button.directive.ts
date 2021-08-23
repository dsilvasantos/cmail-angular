import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[CmailConfirmButton]'
})


export class CmailButtonDirective {

  @HostBinding('class')
  elementClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--accent"


}
