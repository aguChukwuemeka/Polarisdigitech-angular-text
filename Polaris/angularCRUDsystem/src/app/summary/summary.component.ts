import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary = [
    {
      text: 'Daily Transaction Volume',
      volume: '430,000,000'
    },
    {
      text: 'Daily Transaction Volume',
      volume: '150,000,000'
    },
    {
      text: 'Daily Transaction Volume',
      volume: '30,700,000'
    },
    {
      text: 'Daily Transaction Volume',
      volume: '4,000,000'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
