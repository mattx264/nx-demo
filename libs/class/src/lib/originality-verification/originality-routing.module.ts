import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalityVerificationComponent } from './originality-verification/originality-verification.component';

const routes: Routes = [
  {
    path: '', component: OriginalityVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalityVerificationRoutingModule { }
