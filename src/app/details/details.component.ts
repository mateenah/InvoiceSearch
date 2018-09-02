import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from "@angular/router";
import { IUserList } from '../users/userList';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  message:{}
  public users$ = <IUserList>{}
  public resultObj ={}
  public senderObj ={}
  public receiver ={}
  public lines =[]

  constructor(private route: ActivatedRoute, private _data: DataService, private _router:Router) { 
  }
  

  ngOnInit() {
       this._data.currentMessage.subscribe(message=>this.message=message);
     this.users$= (<IUserList>(this.message));
      this.senderObj=this.users$.sender;
      this.receiver=this.users$.receiver;
      this.lines=this.users$.lines;
  }

  onBack():void{
    this._router.navigate(['./users']);
}
}