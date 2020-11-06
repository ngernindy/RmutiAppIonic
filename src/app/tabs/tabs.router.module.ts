import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: '../gpslocation/gpslocation.module#GpslocationPageModule'
          }
        ]
      },
      {
        path: 'showunit',
        children: [
          {
            path: '',
            loadChildren: '../showunit/showunit.module#ShowunitPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'update',
        children: [
          {
            path: '',
            loadChildren: '../update-student/update-student.module#UpdateStudentPageModule'
          }
        ]
      },
      {
        path: 'show',
        children: [
          {
            path: '',
            loadChildren: '../show/show.module#ShowPageModule'
          }
        ]
      },
      {
        path: 'newsdetail',
        children: [
          {
            path: '',
            loadChildren: '../news-detail/news-detail.module#NewsDetailPageModule'
          }
        ]
      },
      {
        path: 'activities',
        children: [
          {
            path: '',
            loadChildren: '../activities/activities.module#ActivitiesPageModule'
          }
        ]
      },
      {
        path: 'calculate',
        children: [
          {
            path: '',
            loadChildren: '../calculate/calculate.module#CalculatePageModule'
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },
      {
        path: 'act',
        children: [
          {
            path: '',
            loadChildren: '../act/act.module#ActPageModule'
          }
        ]
      },
      {
        path: 'showjoin',
        children: [
          {
            path: '',
            loadChildren: '../showjoin/showjoin.module#ShowjoinPageModule'
          }
        ]
      },
      {
        path: 'seeact',
        children: [
          {
            path: '',
            loadChildren: '../seeact/seeact.module#SeeactPageModule'
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
