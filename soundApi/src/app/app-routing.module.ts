import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'songlist',
    pathMatch: 'full'
  },
  {
    path: 'songlist',
    loadChildren: () => import('./songlist/songlist.module').then( m => m.SonglistPageModule)
  },
  {
    path: 'song-detail',
    loadChildren: () => import('./song-detail/song-detail.module').then( m => m.SongDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
