import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  id: any;
  userDetails: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getUserDetails(this.id).subscribe((data) => {
      this.userDetails = data;
      console.log(this.userDetails);
    });
  }
}
