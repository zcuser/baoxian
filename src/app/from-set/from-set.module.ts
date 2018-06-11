import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared.module';
import { RouterModule } from '@angular/router';
import { FromSetRoutes } from './from-set.routes';
import { FromSetComponent } from './from-set.component';
import { TopCrumbComponent } from './top-crumb/top-crumb.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FromExamineComponent } from './examine/examine.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    TabMenuModule,
    PanelModule,
    DropdownModule,
    TableModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ButtonModule,
    RouterModule.forChild(FromSetRoutes)
  ],
  declarations: [
    FromSetComponent,
    TopCrumbComponent,
    FromExamineComponent,
    FooterComponent
  ],
  providers: [ConfirmationService]
})
export class FromSetModule { }
