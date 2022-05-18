import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputangularComponent } from './components/inputangular/inputangular.component';
import { ButtonangularComponent } from './components/buttonangular/buttonangular.component';
import { ListtodoComponent } from './components/listtodo/listtodo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputangularComponent,
    ButtonangularComponent,
    ListtodoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
