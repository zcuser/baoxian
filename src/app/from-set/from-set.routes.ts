import { FromSetComponent } from './from-set.component';

export const FromSetRoutes = [
  {
    path: '',
    component: FromSetComponent,
    children: [
      { path: '', redirectTo: 'from-set', pathMatch: 'full' },
      { path: 'from-set', component: FromSetComponent }
    ]
  }
];
