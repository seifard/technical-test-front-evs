import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(protected httpClient: HttpClient) { }


  getItemsList(endPoint: string): Observable<Object>{
    const url= environment.env + endPoint;
    return this.httpClient.get(url) as Observable<Object>;
  }

  addItem(endPoint:string,item:any): Observable<{}>{
    const url= environment.env + endPoint;
    return this.httpClient.post(url, item, { observe: 'response' });
  }
}
