
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IuserData} from "../userdata";

@Injectable()
export class viewDataService {

    constructor(private http: Http) {
    }

    getPostsbyId(id:number): Observable<IuserData> {
      return this.http
          .get('http://18.188.65.184/posts/'+ id)
          .map((response: Response) => {
              return <IuserData[]>response.json();
             
          })
          .catch(this.handleError);
  }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}