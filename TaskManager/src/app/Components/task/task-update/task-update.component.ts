import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/Classes/task';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  id:number;
  task:Task;
  submitted:boolean=false;
  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit() {
    this.task = new Task();
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.task=data;
    },error=>console.log(error))
  }
  updateProducts(){
    this.taskService.updateTask(this.id , this.task)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
    alert("Task Updated Successfully!!")
  }

  onSubmit(){
    this.updateProducts();
  }
  gotoList(){
    this.router.navigate(['/AllTasks'])
  }

}
