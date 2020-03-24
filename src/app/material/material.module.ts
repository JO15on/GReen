import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog' ;
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponents =[
  MatDialogModule,
  MatAutocompleteModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
