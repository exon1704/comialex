import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([{
        path: 'reportmanager',
        loadChildren: () => import("app/module/reports/manager/reportmanager.module").then(m => m.ReportmanagerModule)
    }, {
        path: 'servicedesk',
        loadChildren: () => import("app/module/reports/servicedesk/service-desk.module").then(m => m.ServiceDeskModule)
    }, ])], exports: [RouterModule]
})
export class ReportsRoutingModule {
}
