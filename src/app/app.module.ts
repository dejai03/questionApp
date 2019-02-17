import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ListService } from './cross/list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    EditListComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
