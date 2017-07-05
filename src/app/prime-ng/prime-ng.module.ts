import { NgModule } from '@angular/core';
import { ButtonModule, ConfirmDialogModule, AutoCompleteModule, CalendarModule, DataListModule, DataTableModule, SharedModule, CheckboxModule } from 'primeng/primeng';
@NgModule({
    imports: [AutoCompleteModule, ButtonModule, CalendarModule, DataListModule, DataTableModule, SharedModule, CheckboxModule],
    exports: [AutoCompleteModule, ButtonModule, CalendarModule, DataListModule, DataTableModule, SharedModule, CheckboxModule]
})
export class PrinmeNgModule { }
