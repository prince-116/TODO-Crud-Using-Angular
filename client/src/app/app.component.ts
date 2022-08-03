import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  addTask: any;
  title = 'client';
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private taskservice: TaskService
  ) {
    this.addTask = fb.group({
      task: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.addTask.value);
    this.taskservice.addtask(this.addTask.value).subscribe((data) => {
      console.log(data);
      this.routes.navigate(['/']);

      window.location.reload();

      // this.routes
      //   .navigateByUrl('/', { skipLocationChange: true })
      //   .then(() => {
      //     this.routes.navigate(['/']);
      //   });
    });
  }
}
