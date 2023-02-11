import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    units: any[];
    selectedUnit?: any;
    stateReport: any;
    statesReport: any;
    selectedTypeReport: any;
    typeReports: any;

    constructor() {
        this.stateReport = null;
        this.statesReport = [{label: 'Cerrado', value: 'false'}, {label: 'Abierto', value: 'true'}];
        this.selectedUnit = "";
        this.typeReports = [{name: 'Falla SPOS', code: 'SPOS'}, {name: 'Error descarga de catálago', code: 'SPOS'}];
        this.units =
            [
                {name: 'FC2465 SANTA MA. JALAPA DEL MARQUES 1', code: 'FC2465'},
                {name: 'FC1447 SANTIAGO PINOTEPA NACIONAL 2',code: 'FC1447'},
                {name: 'FC0107 SAN PEDRO POCHUTLA 1', code: 'FC0107'},
                {name: '72908 SANTO DOMINGO TEHUANTEPEC 4', code: '72908'}
            ];
    }
}
