import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   

  fetchData=()=>{
    this.myapi.view().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
  }

  viewData:any=[]

  ngOnInit(): void {
  }

}
