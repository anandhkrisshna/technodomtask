
import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from "@angular/core";
import {viewDataService} from "./viewData.service";
import {IuserData} from "../userdata";
@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css'],
  providers: [viewDataService]
  
})
export class ViewdataComponent implements OnInit {
  getUserbyId : IuserData;
  getComments:IuserData;
  getPhotos:IuserData;
  constructor(private viewApiService: viewDataService, private _activatedRoute:ActivatedRoute) { }



  ngOnInit(): void {
    let id:number=this._activatedRoute.snapshot.params['id'];
    this.viewApiService.getPostsbyId(id).subscribe((usersData) => {
      this.getUserbyId=usersData;
      this.getComments = usersData['comment'];
      this.getPhotos = usersData['photo'];
      console.log(this.getComments);
      console.log(this.getUserbyId);
      console.log( this.getPhotos);
    },
    (error) => {
      console.log(error)
    }
  );

}

}
