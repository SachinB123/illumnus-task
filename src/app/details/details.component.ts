import { Component, OnInit, Injector } from '@angular/core';
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
  userJoinDate:any;

  dynamicImageUrl :any;

  constructor(private gservice: PostGetService, private router : Router, private route: ActivatedRoute, private injector: Injector) { 
    const A = this.injector.get('GlobalVar');
    this.dynamicImageUrl = A.imageUrl;

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
      this.userJoinDate = new Date(this.userDetailsData.created_at).toUTCString();console.log("date :: ", this.userJoinDate);
    });
  }

  goToFollowersPage(data:any){
    this.router.navigate(['followers'], { queryParams: { userName: data } });
  }

}
