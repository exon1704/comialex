import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GenerateComponent} from "@reports/generate/generate.component";

@NgModule({
    imports: [RouterModule.forChild([{
        path: '', component: GenerateComponent
    }])], exports: [RouterModule]
})
export class GenerateRoutingModule {
}
