import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/Models/Classes/owner';
import { OwnerService } from 'src/app/Services/owner-service.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  id:number;
  owner:Owner;

 constructor(private route:ActivatedRoute,
   private router:Router, private ownerService:OwnerService) { }

 ngOnInit() {
   this.owner=new Owner();
   this.id = this.route.snapshot.params['id'];
   this.ownerService.getOwnerById(this.id)
   .subscribe(data=>{
     console.log(data); 
     this.owner=data;
   });
   
 }

 list(){
   this.router.navigate(['/AllOwners'])
 }
}
