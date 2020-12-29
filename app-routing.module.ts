import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogInComponent } from './log-in/log-in.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: "Home",component: HomeComponent },
  {path: "About",component: AboutComponent },
  {path: "Contact",component: ContactComponent },
  {path: "Settings",component: SettingsComponent },
   {path: "LogIn",component: LogInComponent },
  {path: "Register",component: RegisterComponent },
  {path: '',redirectTo: '/Home',pathMatch:'full'},
   {path: "**",component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
