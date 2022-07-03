import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUserList().subscribe((data: any) => {
      this.userList = data;
      console.log(JSON.stringify(data));
    });
  }
}
