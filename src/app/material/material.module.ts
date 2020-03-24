import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog' ;
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox'

const MaterialComponents =[
  MatDialogModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCheckboxModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
