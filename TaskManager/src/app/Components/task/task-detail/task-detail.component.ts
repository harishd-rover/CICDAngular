import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/Classes/task';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  id:number;
  task:Task;

 constructor(private route:ActivatedRoute,
   private router:Router, private taskService:TaskService) { }

 ngOnInit() {
   this.task=new Task();
   this.id = this.route.snapshot.params['id'];
   this.taskService.getTaskById(this.id)
   .subscribe(data=>{
     console.log(data); 
      this.task=data;
   });
   
 }

 list(){
   this.router.navigate(['/AllTasks'])
 }
}

