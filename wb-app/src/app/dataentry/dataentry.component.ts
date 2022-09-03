import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css'],
})
export class DataentryComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
