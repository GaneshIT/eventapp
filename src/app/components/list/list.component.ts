import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  eventlist?:Event[];
constructor(private service:EventService){}
ngOnInit():void{
  this.getAll();
}
getAll():void{
  this.service.getEvents().subscribe({
    next: (data) => {
      this.eventlist=data;
    },
    error: (e) => {
      console.log(e);
    }
  })
}
}
