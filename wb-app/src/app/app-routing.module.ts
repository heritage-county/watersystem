import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckerrorsComponent } from './checkerrors/checkerrors.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { ExportapnacomplexComponent } from './exportapnacomplex/exportapnacomplex.component';
import { TogglelockComponent } from './togglelock/togglelock.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dataentry', component: DataentryComponent },
  { path: 'checkerrors', component: CheckerrorsComponent },
  { path: 'export', component: ExportapnacomplexComponent },
  { path: 'lock', component: TogglelockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
