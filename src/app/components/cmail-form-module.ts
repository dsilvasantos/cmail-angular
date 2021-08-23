import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';



@NgModule({
  declarations: [CmailFormFieldDirective,
    CmailFormGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormFieldDirective,
    CmailFormGroupComponent
  ]
})
export class CmailFormModule { }
