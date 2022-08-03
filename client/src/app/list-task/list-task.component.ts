import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  tasks: any;

  constructor(private taskservice: TaskService, private routes: Router) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.taskservice.listtask().subscribe((data: any) => {
      //console.log(data);
      this.tasks = data;
    });
  }


  deltask(datas: any) {
    this.taskservice.deletetask(datas._id).subscribe((data) => {
      console.log(data);
      this.tasks = this.tasks.filter((u: any) => u !== datas);
    });
  }

  

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
