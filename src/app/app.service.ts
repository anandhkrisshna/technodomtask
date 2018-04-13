
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IuserData} from "./userdata";

@Injectable()
export class AppService {

    private _postsURL = "http://18.188.65.184/posts";

    constructor(private http: Http) {
    }

//getPostData    
    getPosts(): Observable<IuserData[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <IuserData[]>response.json();
               
            })
            .catch(this.handleError);
    }

//get PostDatabyId
    getPostsbyId(id:number): Observable<IuserData> {
      return this.http
          .get('http://18.188.65.184/posts/'+ id)
          .map((response: Response) => {
              return <IuserData[]>response.json();
             
          })
          .catch(this.handleError);
  }

  //get Twitter Data

  getTwitterData(): Observable<IuserData[]> {
    return this.http
        .get("http://18.188.65.184/twitter")
        .map((response: Response) => {
            return <IuserData[]>response.json();
           
        })
        .catch(this.handleError);
}
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}