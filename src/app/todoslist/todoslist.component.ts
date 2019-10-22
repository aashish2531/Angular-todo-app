import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent {
 cond_vall = false;
  todos = 
  [
    {
      task: 'I need to set the alarm'
    },
    {
      task: 'I need to go for shopping'
    }
  ];

  addTodo(taskTodo){
    var newTodo1 = {
      task: taskTodo
    };
    this.todos.push(newTodo1);
  };
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.task !== todo.task );
  }
  
  editTodo(i: number){
    this.cond_vall = true;
  }
  // ngOnInit() {
  //   this.changeLangauge(0);
  // }

  // changeLangauge(langId: number) {
  //   this.list = this.todos[langId].list;
  //   Object.assign(this.sortList, this.list);
  //   this.sortList.sort((a, b) => a.localeCompare(b, 'en'))
  // }

}
