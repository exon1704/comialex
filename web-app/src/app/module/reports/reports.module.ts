import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { RegisterComponent } from './register/register.component';
import {PanelModule} from "primeng/panel";
import {MegaMenuModule} from "primeng/megamenu";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        ReportsRoutingModule,
        PanelModule,
        MegaMenuModule,
        ButtonModule,
        DividerModule,
        DropdownModule,
        FormsModule,
        InputNumberModule,
        SelectButtonModule,
        InputTextareaModule,
        InputTextModule
    ]
})
export class ReportsModule { }
