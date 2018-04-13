import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {IuserData} from "../userdata";
@Component({
    selector: 'app-post-data',
    templateUrl: './post-data.component.html',
    styleUrls: ['./post-data.component.css'],
    providers: [AppService]
})
export class PostDataComponent implements OnInit {
    _postsArray: IuserData[];
     getUserbyId : IuserData;


    constructor(private apiSerivce: AppService, private _activatedRoute:ActivatedRoute) {
    }

    getPosts(): void {
        this.apiSerivce.getPosts()
            .subscribe(
                resultArray => this._postsArray = resultArray,
              
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getPosts();
        let id:number=this._activatedRoute.snapshot.params['id'];
        this.apiSerivce.getPostsbyId(id).subscribe((usersData) => this.getUserbyId=usersData,
        (error) => {
          console.log(error)
        }
      );
    }
}


