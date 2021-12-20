import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task-in-progress',
  templateUrl: './task-in-progress.component.html',
  styleUrls: ['./task-in-progress.component.css']
})
export class TaskInProgressComponent implements OnInit {



  tasks:Observable<Task[]>
  
  constructor(private taskService:TaskService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    
    this.tasks=this.taskService.getAllTasksInProgress();
    
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