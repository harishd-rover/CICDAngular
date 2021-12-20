import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  submitted = false
  title:string = ""
  constructor(
    private router:Router) { 
      
    }

  ngOnInit(): void {
  }
  searchTitle(): void {
    console.log(this.title)
    this.router.navigate(['/TaskSearch',this.title])

  }
}
