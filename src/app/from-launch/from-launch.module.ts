import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared.module';
import { RouterModule } from '@angular/router';
import { FromLaunchRoutes } from './from-launch.routes';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FromLaunchComponent } from './from-launch.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TopCrumbComponent } from './top-crumb/top-crumb.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FromListComponent } from './from-list/from-list.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanelModule,
    DropdownModule,
    TableModule,
    RadioButtonModule,
    ConfirmDialogModule,
    CheckboxModule,
    ButtonModule,
    RouterModule.forChild(FromLaunchRoutes)
  ],
  declarations: [
    FromLaunchComponent,
    TopCrumbComponent,
    FromListComponent
  ],
  providers: [ConfirmationService]
})
export class FromLaunchModule { }
