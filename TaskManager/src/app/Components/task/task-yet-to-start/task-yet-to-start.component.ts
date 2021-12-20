import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-yet-to-start',
  templateUrl: './task-yet-to-start.component.html',
  styleUrls: ['./task-yet-to-start.component.css']
})
export class TaskYetToStartComponent implements OnInit {


  tasks:Observable<Task[]>
  
  constructor(private taskService:TaskService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    
    this.tasks=this.taskService.getAllTasksYetToStart();
    
  }
   deleteTask(id:number){
     this.taskService.deleteTask(id)
     .subscribe(data=>{console.log(data);
                        this.loadData();},
                        error=>console.log(error))
     
   }
  OwnerDetails(id:number){
    this.router.navigate(['details',id]);
  } 


  updateOwner(id:number){
    this.router.navigate(['update',id]);
  }
}