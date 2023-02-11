import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultComponent} from "@reports/consult/consult.component";



const routes: Routes = [{
    path: '', component: ConsultComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class ConsultRoutingModule {
}
