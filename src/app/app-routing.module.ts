import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { DetailsComponent } from './details/details.component';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  { path: '', component: EntryComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'followers', component: FollowersComponent},
];

const useHash = {useHash: true};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, useHash)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
