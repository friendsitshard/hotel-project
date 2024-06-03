import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'welcome', component:WelcomeComponent},
    {path:'rooms', component:RoomsComponent},
    {path:'contact', component:ContactComponent},
    {path:'', component:LoginComponent},
];
