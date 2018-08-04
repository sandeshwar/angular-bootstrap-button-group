import { NgModule } from '@angular/core';

import { ButtonGroupComponent } from './button-group.component';
import { CommonModule } from '../../../../node_modules/@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonGroupComponent],
  exports: [ButtonGroupComponent]
})
export class ButtonGroupModule { }
