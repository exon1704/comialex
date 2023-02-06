import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportmanagerRoutingModule} from './reportmanager-routing.module';
import {ReportManagerComponent} from './report-manager.component';
import {PanelModule} from "primeng/panel";
import {MegaMenuModule} from "primeng/megamenu";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {FieldsetModule} from "primeng/fieldset";


@NgModule({
    declarations: [
        ReportManagerComponent
    ],
    imports: [
        CommonModule,
        ReportmanagerRoutingModule,
        PanelModule,
        MegaMenuModule,
        ButtonModule,
        FieldsetModule,
        TableModule,
        CalendarModule,
        RippleModule,
        InputTextModule
    ]
})
export class ReportmanagerModule {
}
