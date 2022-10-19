import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  fName=""
  origin=""
  destination=""
  capacity=""

  readValue=()=>{
    let data={

      "fName":this.fName,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }
    console.log(data)
    this.myapi.getData(data).subscribe(
      (responce)=>{
        console.log(responce)
        alert("Added")
        
      }
    )
    this.fName=""
    this.origin=""
    this.destination=""
    this.capacity=""
  }

  ngOnInit(): void {
  }

}
