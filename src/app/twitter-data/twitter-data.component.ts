import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {IuserData} from "../userdata";
@Component({
  selector: 'app-twitter-data',
  templateUrl: './twitter-data.component.html',
  styleUrls: ['./twitter-data.component.css'],
    providers: [AppService]
})
export class TwitterDataComponent implements OnInit {
  TwitterData: IuserData[];
  TwitterImages:IuserData[];


    constructor(private apiSerivce: AppService, private _activatedRoute:ActivatedRoute) {
    }

    getTwitterData(): void {
        this.apiSerivce.getTwitterData()
            .subscribe(
                (resultArray) =>{
                  this.TwitterData = resultArray;
                  console.log(this.TwitterData);
                  this.TwitterImages = resultArray[1]['entities'].media;
                  console.log(this.TwitterImages);
                },
              
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getTwitterData();
    }
}





