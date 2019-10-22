import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list'
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  // @Input() index: number;
  cond_vall = false;
  @Input()list :List;
  lists1 : List[];
  selectedTask : List;

  editTodo(list : List, index:number): void{
    console.log(index);
    this.cond_vall = true;
     this.selectedTask= Object.assign({}, list);
  }

  getLists(): void{
    this.listService.getLists().subscribe(lists1 => this.lists1 = lists1.slice(0,3));
  }

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getLists();
  }

  deleteTodo(list){
    this.lists1 = this.lists1.filter( t => t.task !== list.task );
  }

  addTodo(list){
    var newTodo1 = {
      // id: id1,
      task: list
    };
    this.lists1.push(newTodo1);
  };

  updateTodo(list,index){
    this.lists1[1] = Object.assign({}, list);
    console.log(index);
  };
}
