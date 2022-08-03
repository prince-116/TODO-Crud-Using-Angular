import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  addTask: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private taskservice: TaskService,
    private url: ActivatedRoute
  ) {
    this.addTask = fb.group({
      task: ['', Validators.required],
      id:[]
    });
  }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.taskservice.singletask(this.id).subscribe((data)=>{
      this.addTask.patchValue(data);
    });
  }

  onSubmit() {
    console.log(this.addTask.value);
    this.taskservice
      .updatetask(this.id, this.addTask.value)
      .subscribe((data) => {
        console.log(data);
        this.routes.navigate(['/']);
      });
  }
}
