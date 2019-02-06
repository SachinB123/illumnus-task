import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostGetService} from '../post-get.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  userN:any;
  followerData:any;

  constructor(private gservice: PostGetService, private route: ActivatedRoute) { 
    this.route.queryParamMap. subscribe((params)=>{
      this.userN = params.get('userName');
    });
  }

  ngOnInit() {
    this.getUserFollowers();
  }

  getUserFollowers(){
    this.gservice.getUserFollowerDetails(this.userN).subscribe((data:any)=>{
      console.log("data in follower component :: ", data);
      this.followerData = data;
    });
  }

}
