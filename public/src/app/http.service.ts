import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from '../../node_modules/rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient ) {
    
      // this.getTasks();
      // // this.addNew(this.addNew);
      // this.showOneTask(this.showOneTask)
      // this.destroyOneTask(this.destroyOneTask)
      this.findTask()
   }


  getTasks(){
    let temp = this._http.get('/tasks')
    temp.subscribe(data => console.log("got our tasks!", data))
  }

  addNew(newTask){
    let addNew = this._http.post('/addNew',newTask)
    addNew.subscribe(data => console.log("added a new task",data ))
  }

  showOneTask(thisTask){
    let thisOne = this._http.get('/task/5d22b9b51305a220f56575d1',thisTask)
    thisOne.subscribe(data => console.log("showing this one", data))
  }
  destroyOneTask(thisTask){
    let disOne = this._http.delete('/task/destroy/5d24244979e8523096dd098f',thisTask)
    disOne.subscribe(data => console.log("destroied this one: ", data))
    this.getTasks()
  }

  findTask(){
    let findOne = this._http.get('http://pokeapi.co/api/v2/pokemon/11/')
    findOne.subscribe(data => console.log(data['moves'][0]['move'].name))
    // JSON.stringify(findOne)

  }
}
