import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  without: number;
  position: number;
  tier1: number;
  tier2: number;
  tier3: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, without: 600, tier1: 720, tier2: 810, tier3: 900},
  {position: 2, without: 660, tier1: 792, tier2: 891, tier3: 990},
  {position: 3, without: 720, tier1: 864, tier2: 972, tier3: 1080},
  {position: 4, without: 780, tier1: 936, tier2: 1053, tier3: 1170},
  {position: 5, without: 840, tier1: 1008, tier2: 1134, tier3: 1260},
  {position: 6, without: 900, tier1: 1080, tier2: 1215, tier3: 1350},
  {position: 7, without: 960, tier1: 1152, tier2: 1296, tier3: 1440},
  {position: 8, without: 1020, tier1: 1224, tier2: 1377, tier3: 1530},
  {position: 9, without: 1080, tier1: 1296, tier2: 1458, tier3: 1620},
  {position: 10, without: 1140, tier1: 1368, tier2: 1539, tier3: 1710},
  {position: 11, without: 1200, tier1: 1440, tier2: 1620, tier3: 1800},
  {position: 12, without: 1260, tier1: 1512, tier2: 1701, tier3: 1890},
  {position: 13, without: 1320, tier1: 1584, tier2: 1782, tier3: 1980},
  {position: 14, without: 1380, tier1: 1656, tier2: 1863, tier3: 2070},
  {position: 15, without: 1440, tier1: 1728, tier2: 1944, tier3: 2160},
];

@Component({
  selector: 'app-retri-dmg-chart',
  templateUrl: './retri-dmg-chart.page.html',
  styleUrls: ['./retri-dmg-chart.page.scss'],
})
export class RetriDmgChartPage implements OnInit {
  displayedColumns: string[] = ['position', 'without', 'tier1', 'tier2', 'tier3'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
