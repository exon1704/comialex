export const modules = [{
    label: "Reportes", items: [{
        label: "Nuevo reporte",
        items: [
            {label: "Mesa de servicio", routerLink: ['/reports/servicedesk/register']},
            {label: "Telmex",routerLink: ['/reports/telmex/register']},
            {label: "Comialex"}]
    }, 
    {label: "Administrador de reportes", routerLink: ['/reports/reportmanager']}
    ]
}, {
    label: "Sistemas TI", items: [{label: "Administrador de inicidencias"}]
}, {
    label: "Empresa", items: [{
        label: "Generales"
    }, {
        label: "Departamentos"
    }, {
        label: "Unidades"
    }, {}]
}]
