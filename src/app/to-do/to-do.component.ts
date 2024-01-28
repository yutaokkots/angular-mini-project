import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})

// @NgModule({
//   imports: [CommonModule]
// })
export class ToDoComponent implements OnInit {
    taskArray = [{taskName: "go for a run", isCompleted: false}];

    ngOnInit(): void {}

    onSubmit(form: NgForm) {
      console.log(form);
  
      this.taskArray.push({
        taskName: form.controls['task'].value,
        isCompleted: false
      })
  
      form.reset();
    }

    onDelete(index: number) {
      console.log(index);
  
      this.taskArray.splice(index, 1);
    }
  
    onCheck(index: number){
      console.log(this.taskArray);
      this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    }
}
