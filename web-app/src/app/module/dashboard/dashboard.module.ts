import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardsRoutingModule} from "@pp-dashboard/dashboard-routing.module";
import {DashboardComponent} from "@pp-dashboard/dashboard.component";

@NgModule({
    imports: [CommonModule, FormsModule, DashboardsRoutingModule], declarations: [DashboardComponent]
})
export class DashboardModule {
}
