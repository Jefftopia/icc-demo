import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MassComponent } from './components/mass/mass.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path: 'mass', component: MassComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];