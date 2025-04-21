import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { HeaderAppComponent } from './header-app/header-app.component';

const routes: Routes = [
  { path: '', component: UserComponentComponent },     // Trang chính
  { path: 'info', component: HeaderAppComponent }      // Trang info
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
