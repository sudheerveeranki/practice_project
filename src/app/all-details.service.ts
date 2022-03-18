import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allinterface } from './newinterface';

@Injectable({
  providedIn: 'root'
})
export class AllDetailsService {

  constructor(private http: HttpClient) { }
  private _url= "../assets/data/adata.json";
  getalldetails(): Observable<allinterface[]>{
    return this.http.get<allinterface[]>(this._url);
  }

}
