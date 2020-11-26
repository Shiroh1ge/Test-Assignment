import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { sharedDirectives } from './directives';

@NgModule({
  imports: [],
  declarations: [sharedDirectives],
  providers: [],
  exports: [sharedDirectives, MatInputModule, MatCheckboxModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatTableModule, MatPaginatorModule]
})
export class SharedModule {
}
