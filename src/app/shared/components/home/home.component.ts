import { Component, OnInit } from '@angular/core';
import { OfService } from '../../service/of-service/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  evenNo : Array<number> =[]
  oddNo : Array<number> = []
  num : Array<number> = []
  div3 : Array<number> = []

  constructor(
    private _ofService : OfService
  ) { }

  ngOnInit(): void {

    this._ofService.ofEven$.subscribe(res => {
      this.evenNo = res
    })


    this._ofService.ofOdd$.subscribe(res => {
      this.oddNo = res
    })

    this._ofService.ofNum$.subscribe(res => {
      this.num = res
    })

    this._ofService.ofDiv.subscribe(data => {
      this.div3 = data
    })

  }

}
