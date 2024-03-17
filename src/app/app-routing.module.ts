import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JitsiIntegrationComponent } from './jitsi-integration/jitsi-integration.component';

const routes: Routes = [
  { path: "", component:JitsiIntegrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
