import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Models/Classes/task';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-by-title',
  templateUrl: './task-by-title.component.html',
  styleUrls: ['./task-by-title.component.css']
})
export class TaskByTitleComponent implements OnInit {

  title:string;
  task:Task;

 constructor(private route:ActivatedRoute,
   private router:Router, private taskService:TaskService) { }

 ngOnInit() {
   this.task=new Task();
   this.title = this.route.snapshot.params['title'];
   this.taskService.findByTitle(this.title)
   .subscribe(data=>{
     console.log(data); 
      this.task=data;
   });
   
 }

 list(){
   this.router.navigate(['/AllTasks'])
 }
}