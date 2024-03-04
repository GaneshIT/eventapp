import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

const baseUrl='http://localhost:5162/api/v1/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {}

  addEvent(data:any):Observable<any>{
    return this.http.post(baseUrl,data);//return type obj->json->status property
  }
  getEvent(id:any):Observable<Event>{
    return this.http.get<Event>(baseUrl+'/GetEventById?id='+id);
  }
  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(baseUrl+'/GetEvents');
  }
  deleteEvent(id:any):Observable<any>{
    return this.http.delete(baseUrl+'/DeleteEvent?id='+id)
  }
}
