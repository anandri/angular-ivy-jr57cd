import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
  public getUserList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  public getUserDetails(id) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
