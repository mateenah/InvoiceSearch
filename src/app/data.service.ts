import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserList } from './users/userList';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  public users$ = []
  public resultObj ={}
  public senderObj ={}
  public receiver ={}
  public lines =[]

  public vhd = <IUserList[]>{}
  constructor(private _http: HttpClient) { }


  getInvoices():Observable<IUserList[]>{
    return this._http.get<IUserList[]>('https://raw.githubusercontent.com/mateenah/json/master/db.json')
                 
  }


  changeMessage(message:{}){
    this.messageSource.next(message);
          console.log("resultObj" +this.messageSource);
  
  }}