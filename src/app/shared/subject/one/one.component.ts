import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../../service/sub-service/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  @ViewChild('userNameForm') userNameForm !: NgForm

  constructor(
    private _username : UsernameService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userNameForm.valid){
      let val = this.userNameForm.value
      this.userNameForm.reset()
      this._username.userName$.next(val.username)
    }
  }

}
