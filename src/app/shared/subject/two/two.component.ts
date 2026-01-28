import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/sub-service/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  userName !: string

  constructor(
    private _username : UsernameService
  ) { }

  ngOnInit(): void {
    this._username.userName$.subscribe(res => {
      this.userName = res
    })
  }

}
