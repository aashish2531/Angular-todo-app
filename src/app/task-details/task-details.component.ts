import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service'
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient }    from '@angular/common/http';
import { todoData } from '../todoData';
import { HttpClientModule }    from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';



@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {
  // adding a default format in case you don't want to pass the format
  // then 'yyyy-MM-dd' will be used
  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date);  // if orginal type was a string
    date.setDate(date.getDate()-day);
    return new DatePipe('en-US').transform(date, format);
  }
}
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent  {
 // @Input() list: List;
 
  searchText;
  constructor(private fb: FormBuilder, private listSrvs: ListService) { }
  
  pageUsers : any;
  // sortList: [];
  
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    dueDate: [''],
    priority: [''],
  });
   
  public ngOnInit(){
    this.showdata();
   
  }

  showdata(){
    this.listSrvs.getConfig()
    .subscribe((data) => {
        this.pageUsers = data;
    });
  }

  deleteRow(id){
    this.listSrvs.deleteData(id).subscribe((val) => {
      alert("Deleted!");
      this.showdata();
    },
    (response) => {
      alert("not deleted")
    });
  }

  onSubmit() {
    this.listSrvs.addData(this.profileForm.value).subscribe((val) => {
        alert("Successfully!");
        this.showdata();
      },
    (error) => {
      console.log(error)
      alert("Internal Data Entry Error");
    });
  }

  // updateRow(data){
  //   this.listSrvs.updateData(data);
  // }
  onSort(val){
    this.pageUsers.sort((a,b) => { return a.name.toLowerCase().localeCompare(b.name.toLowerCase())});
    // return this.pageUsers;
    
  } 
}
