import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: "", loadChildren:()=>import('../general/general.module').then(modul=>modul.GeneralModule)},
    { path: 'courier', loadChildren: () => import('../courier/courier.module').then(module => module.CourierModule) },
    { path: 'client', loadChildren: () => import('../client/client.module').then(module => module.ClientModule) },
    
    
];
