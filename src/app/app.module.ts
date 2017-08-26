import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DietComponent } from './diet/diet.component';
import { AlertaService} from './alerta.service';
import { ListaPessoaService} from './listapessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    DietComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlertaService, ListaPessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
