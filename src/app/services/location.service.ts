import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/Location';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  baseUrl:string = "/api/Location/";
  
  getAllLocationByPatientId(id:string):Observable<Location[]> {
    return this._http.get<Location[]>(this.baseUrl+id)
  }
  addNewLocation(Location:Location):Observable<number> {
    return this._http.post<number>(this.baseUrl,Location)
  }

}
