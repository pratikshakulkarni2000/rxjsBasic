import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../service/sub-service/username.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  username !: string 

  constructor(
    private _username : UsernameService
  ) { }

  ngOnInit(): void {
    this._username.userName$.subscribe(data => {
      this.username = data
    })
  }

}
