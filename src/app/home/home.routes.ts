import { HomeComponent } from './home.component';

export const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'from-set', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren:
          '../bz-modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'from-set',
        loadChildren:
          '../from-set/from-set.module#FromSetModule'
      },
      {
        path: 'from-list',
        loadChildren:
          '../from-launch/from-launch.module#FromLaunchModule'
      },
      { path: 'sys', loadChildren: '../bz-modules/sys/sys.module#SysModule' }
    ]
  }
];
