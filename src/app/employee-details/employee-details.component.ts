import { Component, OnInit } from '@angular/core';
import { AllDetailsService } from '../all-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
      users:any;
  constructor(private user:AllDetailsService) { }

  ngOnInit(): void {
    this.user.getalldetails()
  .subscribe(data=> this.users=data);

  }

}
