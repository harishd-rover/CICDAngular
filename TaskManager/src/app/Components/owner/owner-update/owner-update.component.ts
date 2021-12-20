import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/Models/Classes/owner';
import { OwnerService } from 'src/app/Services/owner-service.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {
  id:number;
  owner:Owner;
  submitted:boolean=false;
  constructor(private route:ActivatedRoute, private router:Router,
    private ownerService:OwnerService) { }

  ngOnInit() {
    this.owner = new Owner();
    this.id = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.owner=data;
    },error=>console.log(error))
  }
  updateProducts(){
    this.ownerService.updateOwner(this.id , this.owner)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.owner = new Owner();
    this.gotoList();
    alert("Owner Updated Successfully!!")
  }

  onSubmit(){
    this.updateProducts();
  }
  gotoList(){
    this.router.navigate(['/AllOwners'])
  }

}
