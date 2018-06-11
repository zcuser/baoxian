import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        SharedModule,
        TooltipModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
      HomeComponent,
      TopMenuComponent,
      LeftMenuComponent
    ]
})
export class HomeModule { }
