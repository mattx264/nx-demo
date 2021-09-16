import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OriginalityVerificationComponent } from './originality-verification/originality-verification.component';
import { OriginalityVerificationRoutingModule } from './originality-routing.module';



@NgModule({
  declarations: [
    OriginalityVerificationComponent
  ],
  imports: [
    CommonModule,
    OriginalityVerificationRoutingModule
  ]
})
export class OriginalityVerificationModule { }
