import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-addeventcomponent',
  templateUrl: './addeventcomponent.component.html',
  styleUrl: './addeventcomponent.component.css'
})
export class AddeventcomponentComponent {
  eventData:Event={
    name:'',
    description:'',
    type:''
  }
  constructor(private service:EventService){}

  addEvent():void{
    const data={
      name:this.eventData.name,
      description:this.eventData.description,
      type:this.eventData.type
    }
    this.service.addEvent(data).subscribe({
      next: (msg) => {
          alert(msg.status)
      },
      error: (err) => {
        console.log(err);
          alert(err)
      }
    });
  }
}
