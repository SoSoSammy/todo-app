import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-new-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {
  @ViewChild('f') todoForm: NgForm;

  onSubmit() {
    console.log(this.todoForm.value.todo);
    console.log('Submitted');
  }
}