import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialComponentItem = [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
];

@NgModule({
    imports: [materialComponentItem],
    exports: [materialComponentItem]
})

export class MaterialModule { }