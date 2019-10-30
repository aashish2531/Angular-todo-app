import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { ListsComponent } from './lists/lists.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'todos-list', component: TodoslistComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'task-details', component: TaskDetailsComponent},
  {path: 'task-list', component: TaskListComponent},
  {path: 'update-task', component: UpdateTaskComponent},
  {path: 'cart', component: CartComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
