import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([{
        loadChildren: () => import("@reports/register/register.module").then(m => m.RegisterModule), path: 'register'
    }, {
        path: 'generate', loadChildren: () => import("@reports/generate/generate.module").then(m => m.GenerateModule)
    }, {path: 'consult', loadChildren: () => import("@reports/consult/consult.module").then(m => m.ConsultModule)}])],
    exports: [RouterModule]
})
export class ReportsRoutingModule {
}
