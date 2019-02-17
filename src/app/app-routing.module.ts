import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'list', component: ListComponent},
  {path:'edit-list', component: EditListComponent},
  {path:'question', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
