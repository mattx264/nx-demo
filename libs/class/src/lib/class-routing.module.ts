import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';

const routes: Routes = [
  {
    path: '',
    component: ClassComponent,
    children:[

      {
        path: 'originality-verification',
        loadChildren: () =>
          import('./originality-verification/originality-verification.module').then((m) => m.OriginalityVerificationModule),
      }

    ]
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
