import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  standalone: true,
  selector: 'app-new-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {
  @ViewChild('form') todoForm: NgForm;

  constructor(private todoService: TodoService) {}

  onSubmit() {
    console.log(this.todoForm.value.todo);
    this.todoService.addTodo(this.todoForm.value.todo);
    this.todoForm.reset();
  }
}
