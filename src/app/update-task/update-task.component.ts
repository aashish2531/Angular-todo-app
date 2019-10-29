import { Component, OnInit } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { HttpClient }    from '@angular/common/http';
import { todoData } from '../todoData';
import { HttpClientModule }    from '@angular/common/http';
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
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private fb: FormBuilder, private listSrvs: ListService) { }

  editData;

  ngOnInit() {
    this.editData = this.listSrvs.dataObj;
    this.setDataValues();
  }
  
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    dueDate: [''],
    priority: [''],
  });

  onSubmit() {
    this.listSrvs.edit(this.profileForm.value).subscribe((val) => {
        alert("Successfully Updated!");
      },
    (error) => {
      console.log(error)
      alert("Internal Data Entry Error!");
    });
  }
  
setDataValues(){
  //this.editData.dueDate = 
    if(this.editData!=null){
    this.profileForm.get('name').setValue(this.editData.name);
    this.profileForm.get('description').setValue(this.editData.description);
   this.profileForm.get('dueDate').setValue(this.editData.dueDate );
   this.profileForm.get('priority').setValue(this.editData.priority);
  }


 
  
}

}

