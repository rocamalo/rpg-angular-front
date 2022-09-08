import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from '../character/list-characters/list-characters.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'characters',
        loadChildren: () => import('../character/character.module').then(m => m.CharacterModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
