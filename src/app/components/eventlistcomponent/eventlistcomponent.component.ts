import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-eventlistcomponent',
  templateUrl: './eventlistcomponent.component.html',
  styleUrl: './eventlistcomponent.component.css'
})
export class EventlistcomponentComponent {
  eventlist?:Event[];//how to declare array in typescript
    constructor(private service:EventService){}
    ngOnInit(){// angular component life cycle method
      this.getAll();//calling function
    }
    getAll():void{
        //call service method
        this.service.getEvents().subscribe(
          {
            next: (data) => {
                this.eventlist=data
            },
            error: (error) => {
              alert(error.message)
            }
          }
        );
    }
}
