import { Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { HeaderAppComponent } from './header-app/header-app.component';

export const routes: Routes = [{ path: '', component: UserComponentComponent },
  { path: 'info', component: HeaderAppComponent }];
