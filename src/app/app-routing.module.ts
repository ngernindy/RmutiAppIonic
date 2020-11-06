import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },   
  { path: 'show', loadChildren: './show/show.module#ShowPageModule' },
  { path: 'gpslocation', loadChildren: './gpslocation/gpslocation.module#GpslocationPageModule' },
  { path: 'showunit', loadChildren: './showunit/showunit.module#ShowunitPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'update-student', loadChildren: './update-student/update-student.module#UpdateStudentPageModule' },
  { path: 'profileupdate', loadChildren: './profileupdate/profileupdate.module#ProfileupdatePageModule' },
  { path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'activities', loadChildren: './activities/activities.module#ActivitiesPageModule' },
  { path: 'calculate', loadChildren: './calculate/calculate.module#CalculatePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'act', loadChildren: './act/act.module#ActPageModule' },
  { path: 'imgone', loadChildren: './imgone/imgone.module#ImgonePageModule' },
  { path: 'imgtwo', loadChildren: './imgtwo/imgtwo.module#ImgtwoPageModule' },
  { path: 'showjoin', loadChildren: './showjoin/showjoin.module#ShowjoinPageModule' },  { path: 'seeact', loadChildren: './seeact/seeact.module#SeeactPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
