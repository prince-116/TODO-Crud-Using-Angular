import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  addtask(task: any) {
    return this.http.post('http://localhost:5050/endpoint/add-task', task);
  }

  listtask() {
    return this.http.get('http://localhost:5050/endpoint/');
  }

  deletetask(id: any) {
    return this.http.delete('http://localhost:5050/endpoint/del-task/' + id);
  }

  singletask(id: any) {
    return this.http.get('http://localhost:5050/endpoint/task' + id);
  }

  updatetask(id:any, task:any){
    return this.http.put('http://localhost:5050/endpoint/update-task/' + id,task);
  }
}
