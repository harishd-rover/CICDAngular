import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/app/Models/Classes/owner';
import { OwnerService } from 'src/app/Services/owner-service.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  submitted:boolean = false
  postData !: Owner
  form:any
  //public user:any = []

  constructor(private ownerService:OwnerService, private router:Router) { };

  ngOnInit(){  
    this.form = new FormGroup(
      {
        ownerId : new FormControl(),
        ownerName : new FormControl(""),
        email : new FormControl(""),
        
      })
  }

  onSubmit(owner:any){

    this.postData = owner

    console.log(this.postData)
    this.ownerService.createOwner(this.postData).subscribe(
      data=>console.log(data)
      
    )
    this.router.navigate(['/AllOwners'])
    alert("Owner Added Successfully!!")

  }

  list(){
    this.router.navigate(['/AllOwners'])
  }

}