import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../services/my-api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  data: any = {};


  constructor(private myApiService: MyApiService) {}

  ngOnInit() {
    this.myApiService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

}
