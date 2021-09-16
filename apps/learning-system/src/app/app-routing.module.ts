import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'class/:classId',
    loadChildren:()=> import('@lms/class').then(m=>m.ClassModule)
  },

  // {
  //   path: 'submissions',
  //   loadChildren: () =>
  //     import(@Mymodule'./submissions/submissions.module').then(
  //       (m) => m.SubmissionsModule
  //     ),
  // },
  // {
  //   path: 'temp',
  //   component: AppTemplateComponent,
  // },
  {
    path: '**',
    redirectTo: 'class/246656', //todo this is temp
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
