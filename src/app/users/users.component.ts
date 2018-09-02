import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  filterInvoice = "";
  public users$ = []
  public resultObj = {}
  public senderObj = {}
  public receiver = {}
  public lines = []
  error = ""
  message: string

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.currentMessage.subscribe(message => this.resultObj = message)
    this.myFunction(this.filterInvoice);
  }

  myFunction(filterInvoice): any {
    this._data.getInvoices().subscribe(
      data => this.users$ = data
    );

    for (var i = 0; i < this.users$.length; i++) {
      var obj = this.users$[i];
      if (obj.invoiceId == filterInvoice) {
        this.resultObj = obj;
        this.senderObj = obj.sender;
        this.receiver = obj.receiver;
        this.lines = obj.lines;
        return this.resultObj;
      } else {
        this.error = "No Invoice Found";
      }
    }
    this.resultObj = {};
  }

  onSelect() {
    this._data.changeMessage(this.resultObj);
  }
}
