import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/Models/Classes/task';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  submitted:boolean = false
  postData !: Task
  form:any
  //public user:any = []

  constructor(private taskService:TaskService, private router:Router) { };

  ngOnInit(){  
    this.form = new FormGroup(
      {
        MyTaskId : new FormControl(),
        TaskName : new FormControl(""),
        Description : new FormControl(""),
        TargetDate : new FormControl(Date),
        Status : new FormControl(""),
        Priority : new FormControl(""),
        Tags : new FormControl(""),
        Urgent : new FormControl(false),
        Important : new FormControl(false),
        OwnerId : new FormControl() 
      })
  }

  onSubmit(task:any){

    this.postData = task

    console.log(this.postData)
    this.taskService.CreateTask(this.postData).subscribe(
      data=>console.log(data)
    )
    this.router.navigate(['/AllTasks'])
    alert("Task Created Successfully!!!")
  }

  list(){
    this.router.navigate(['/AllTasks'])
  }

}