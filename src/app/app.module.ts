import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule }    from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ListsComponent } from './lists/lists.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoslistComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TaskDetailsComponent,
    ListsComponent,
    TaskListComponent,
    UpdateTaskComponent,
    CartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
