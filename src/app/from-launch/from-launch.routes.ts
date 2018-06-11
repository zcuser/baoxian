import { FromLaunchComponent } from './from-launch.component';
import { FromListComponent } from './from-list/from-list.component';

export const FromLaunchRoutes = [
  { path: '', component: FromListComponent },
  { path: 'from-launch', component: FromLaunchComponent}
];
