import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { todoData } from '../todoData'
import { ListService } from '../list.service'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private listSrvs: ListService) { }

  public ngOnInit(){
    this.showdata();
  }

  pageUsers : object;

  showdata(){
    this.listSrvs.getConfig()
    .subscribe((data) => {
        this.pageUsers = data;
    });
  }

  deleteRow(id){
    this.listSrvs.deleteData(id).subscribe((val) => {
      alert("deleted");
      this.showdata();
    },
    (response) => {
      alert("not deleted")
    });
  }
}
