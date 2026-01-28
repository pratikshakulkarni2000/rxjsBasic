import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/of-service/of.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  carsArr !: Array<string>

  colorsArr !: Array<string>

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {
    this._ofService.car$.subscribe(data => {
      this.carsArr = data
    })

    this._ofService.colors$.subscribe(data => {
      this.colorsArr = data
      
    })
  }

}
