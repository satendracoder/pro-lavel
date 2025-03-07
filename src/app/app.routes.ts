import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth-layout/auth-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { GrowthComponent } from './pages/growth/growth.component';

export const routes: Routes = [

    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:AuthLayoutComponent},
    {path:'about', component:AboutComponent},
    {path:'growth', component:GrowthComponent}
];
