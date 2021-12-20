import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { OwnerComponent } from './Components/owner/owner.component';
import { TaskComponent } from './Components/task/task.component';
import { TaskListComponent } from './Components/Task/task-list/task-list.component';
import { OwnerListComponent } from './Components/Owner/owner-list/owner-list.component';
import { OwnerDetailComponent } from './Components/owner/owner-detail/owner-detail.component';
import { OwnerUpdateComponent } from './Components/owner/owner-update/owner-update.component';
import { OwnerCreateComponent } from './Components/owner/owner-create/owner-create.component';
import { TaskDetailComponent } from './Components/task/task-detail/task-detail.component';
import { TaskUpdateComponent } from './Components/task/task-update/task-update.component';
import { TaskCreateComponent } from './Components/task/task-create/task-create.component';
import { TaskCompletedComponent } from './Components/task/task-completed/task-completed.component';
import { TaskYetToStartComponent } from './Components/task/task-yet-to-start/task-yet-to-start.component';
import { TaskInProgressComponent } from './Components/task/task-in-progress/task-in-progress.component';
import { TaskByTitleComponent } from './Components/task/task-by-title/task-by-title.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent1Component } from './test-component1/test-component1.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OwnerComponent,
    TaskComponent,
    TaskListComponent,
    OwnerListComponent,
    OwnerDetailComponent,
    OwnerUpdateComponent,
    OwnerCreateComponent,
    TaskDetailComponent,
    TaskUpdateComponent,
    TaskCreateComponent,
    TaskCompletedComponent,
    TaskYetToStartComponent,
    TaskInProgressComponent,
    TaskByTitleComponent,
    TestComponentComponent,
    TestComponent1Component,


   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
