import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostGetService} from '../post-get.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user:any;
  userDetailsData: any;

  constructor(private gservice: PostGetService, private router : Router, private route: ActivatedRoute) { 
    this.route.queryParamMap. subscribe((params)=>{
      this.user = params.get('userName');
    });
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails(){
    this.gservice.getUserDetails(this.user).subscribe((data:any)=>{
      console.log("data in details component :: ", data);
      this.userDetailsData = data;
    });
  }

  goToFollowersPage(data:any){
    this.router.navigate(['followers'], { queryParams: { userName: data } });
  }

}
