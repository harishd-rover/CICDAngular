import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/Models/Classes/owner';
import { OwnerService } from 'src/app/Services/owner-service.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners:Observable<Owner[]>
  
  constructor(private ownerService:OwnerService,
    private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    
    this.owners=this.ownerService.getAllOwners();
    
  }
   deleteOwner(id:number){
     this.ownerService.deleteOwner(id)
     .subscribe(data=>{console.log(data);
                        this.loadData();},
                        error=>console.log(error))
     
   }
  OwnerDetails(id:number){
    this.router.navigate(['OwnerDetails',id]);
  } 
  updateOwner(id:number){
    this.router.navigate(['OwnerUpdate',id]);
  }
}
