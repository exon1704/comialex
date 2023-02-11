import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateRoutingModule } from './generate-routing.module';
import { GenerateComponent } from './generate.component';
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    GenerateComponent
  ],
    imports: [
        CommonModule,
        GenerateRoutingModule,
        PanelModule,
        DividerModule,
        DropdownModule,
        FormsModule,
        InputNumberModule,
        InputTextareaModule,
        ButtonModule
    ]
})
export class GenerateModule { }
