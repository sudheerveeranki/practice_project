import { Component, OnInit } from '@angular/core';
import { AllDetailsService } from '../all-details.service';

@Component({
  selector: 'app-children-details',
  templateUrl: './children-details.component.html',
  styleUrls: ['./children-details.component.css']
})
export class ChildrenDetailsComponent implements OnInit {
       details:any;
  constructor(private _ad:AllDetailsService) {}

  ngOnInit()  {
     this._ad.getalldetails()
     .subscribe((data: any)=>this.details= data);
  }

}
