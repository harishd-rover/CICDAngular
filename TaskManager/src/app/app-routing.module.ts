import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerCreateComponent } from './Components/owner/owner-create/owner-create.component';
import { OwnerDetailComponent } from './Components/owner/owner-detail/owner-detail.component';
import { OwnerListComponent } from './Components/owner/owner-list/owner-list.component';
import { OwnerUpdateComponent } from './Components/owner/owner-update/owner-update.component';
import { TaskByTitleComponent } from './Components/task/task-by-title/task-by-title.component';
import { TaskCompletedComponent } from './Components/task/task-completed/task-completed.component';
import { TaskCreateComponent } from './Components/task/task-create/task-create.component';
import { TaskDetailComponent } from './Components/task/task-detail/task-detail.component';
import { TaskInProgressComponent } from './Components/task/task-in-progress/task-in-progress.component';
import { TaskListComponent } from './Components/task/task-list/task-list.component';
import { TaskUpdateComponent } from './Components/task/task-update/task-update.component';
import { TaskYetToStartComponent } from './Components/task/task-yet-to-start/task-yet-to-start.component';
import { TaskService } from './Services/task-service.service';

const routes: Routes = [
  {path:'AllOwners', component: OwnerListComponent},
  {path:'AllTasks', component: TaskListComponent},
  {path:'',redirectTo:'AllTasks',pathMatch:'full' },
  {path:'owners' , component:OwnerListComponent},
  {path: 'OwnerDetails/:id', component:OwnerDetailComponent },
  {path: 'OwnerUpdate/:id', component:OwnerUpdateComponent },
  {path:'CreateOwner', component: OwnerCreateComponent},
  {path:'CreateTask', component: TaskCreateComponent},
  {path: 'TaskDetails/:id', component:TaskDetailComponent },
  {path: 'TaskUpdate/:id', component:TaskUpdateComponent },
  {path: 'TasksCompleted', component:TaskCompletedComponent },
  {path: 'TasksYetToStart', component:TaskYetToStartComponent },
  {path: 'TasksInProgress', component:TaskInProgressComponent },
  {path: 'TaskSearch/:title', component:TaskByTitleComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
