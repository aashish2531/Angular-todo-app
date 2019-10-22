import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { ListsComponent } from './lists/lists.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
const routes: Routes = [
  {path: 'todos-list', component: TodoslistComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'task-details', component: TaskDetailsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
