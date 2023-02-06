import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    NewServicedeskReportComponent
} from "@app-modules/reports/servicedesk/new-servicedesk-report/new-servicedesk-report.component";


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'register', component: NewServicedeskReportComponent
        }
    ])],
    exports: [RouterModule]
})
export class ServiceDeskRoutingModule {
}
