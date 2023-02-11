import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsultRoutingModule} from "@reports/consult/consult-routing.module";
import {ConsultComponent} from "@reports/consult/consult.component";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [ConsultComponent],
    imports: [CommonModule, ConsultRoutingModule, FieldsetModule, PanelModule, CalendarModule, TableModule, InputTextModule, DividerModule, DropdownModule, FormsModule]
})
export class ConsultModule {
}
