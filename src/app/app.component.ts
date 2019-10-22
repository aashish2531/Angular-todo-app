import { Component } from '@angular/core';

// interface todos{
//   task: string
//  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos-app';

  //task = Task[];

  todos = [
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
  
  editTodo(task1: string){
    
  }
  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent, {windowClass: 'modal-holder', centered: true});
  //   modalRef.componentInstance.name = 'World';
  // }
}

