import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailFormModule } from './cmail-form-module';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [HeaderComponent, CmailListItemComponent],
  imports: [CommonModule, RouterModule, CmailFormModule],
  exports: [HeaderComponent, CmailFormModule, CmailListItemComponent]
})
export class SharedComponentsModule { }
