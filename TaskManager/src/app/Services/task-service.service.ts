import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl:string = 'https://webapicasestudybyharishd.azurewebsites.net/api/MyTasks';


  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl+'/GetMyTask');
  }
  getAllTasksCompleted(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl+'/GetMyTaskCompleted');
  }
  getAllTasksYetToStart(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl+'/GetMyTaskYetToStart');
  }
  getAllTasksInProgress(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl+'/GetMyTaskInProgress');
  }
  getTaskById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl+ '/GetMyTask'}/${id}`);
  }

  CreateTask(task:Object):Observable<Object>{
    return this.http.post(this.baseUrl+'/PostMyTask', task);
  }

  updateTask(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl+'/PutMyTask'}/${id}`, data);
  }

  deleteTask(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/DeleteMyTask'}/${id}`);
  }


  
  findByTitle(title:any):Observable<any>{
    return this.http.get(`${this.baseUrl+ '/GetMyTaskByTitle'}/${title}`);
  }
}
