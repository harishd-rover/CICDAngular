import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../Models/Classes/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl:string = 'https://localhost:7250/api/Owners';


  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl+'/GetOwner');
  }
   
  getOwnerById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl+ '/GetOwner'}/${id}`);
  }


  createOwner(owner: Owner): Observable<any> {
    return this.http.post(this.baseUrl+'/PostOwner', owner);
  }
  

  updateOwner(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl+'/PutOwner'}/${id}`, data);
  }

  deleteOwner(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl+'/DeleteOwner'}/${id}`);
  }


  findByTitle(title: any): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.baseUrl}?title=${title}`);
  }
}
