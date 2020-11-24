import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: [MatInputModule, MatCheckboxModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {
}
