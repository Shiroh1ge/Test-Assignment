import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: [MatInputModule, MatCheckboxModule, ReactiveFormsModule, FormsModule, MatButtonModule],
})
export class SharedModule {
}
