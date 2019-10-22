import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';
import { ListService } from '../list.service'
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() list: List;
  lists1: List[];

  constructor(private fb: FormBuilder, private listSrvs: ListService) { }

  //profileForm: FormGroup;

  ngOnInit() {

  }
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    dueDate: [''],
    priority: [''],
  });

  onSubmit() {
    this.listSrvs.addData(this.profileForm.value).subscribe((val) => {
        alert("Successfully!");
      },
        (error) => {
          console.log(error)
          alert("Internal Data Entry Error");
        });
  }
}
