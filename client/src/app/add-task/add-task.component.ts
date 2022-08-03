import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addTask: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private taskservice: TaskService
  ) {
    this.addTask = fb.group({
      task: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.addTask.value);
    this.taskservice.addtask(this.addTask.value).subscribe((data) => {
      console.log(data);
      
      this.routes.navigate(['/']);
    });
  }
}
