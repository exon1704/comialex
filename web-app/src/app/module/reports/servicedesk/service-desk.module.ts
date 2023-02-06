import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServiceDeskRoutingModule} from './service-desk-routing.module';
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {TagModule} from "primeng/tag";
import {MegaMenuModule} from "primeng/megamenu";
import {DividerModule} from "primeng/divider";
import {NewServicedeskReportComponent} from './new-servicedesk-report/new-servicedesk-report.component';
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SelectButtonModule} from "primeng/selectbutton";


@NgModule({
    declarations: [
        NewServicedeskReportComponent
    ],
    imports: [
        CommonModule,
        ServiceDeskRoutingModule,
        ButtonModule,
        PanelModule,
        TagModule,
        DividerModule,
        DropdownModule,
        InputNumberModule,
        FormsModule,
        MegaMenuModule,
        InputTextModule,
        InputTextareaModule,
        SelectButtonModule
    ]
})
export class ServiceDeskModule {
}
