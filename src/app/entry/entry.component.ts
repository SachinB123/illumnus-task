import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostGetService} from '../post-get.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entryUserData:any;

  constructor(private gservice: PostGetService, private router : Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.gservice.getUsersList().subscribe((data:any)=>{
      console.log("data in entry component :: ", data);
      this.entryUserData = data;
    });
  }

  goToDetailsPage(data:any){
    this.router.navigate(['details'], { queryParams: { userName: data } });
  }

}
