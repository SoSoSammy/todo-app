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
  @ViewChild('form') todoForm: NgForm; // The todo form

  /**
   * Build the new todo component with its necessary dependencies.
   *
   * @param todoService - the todo service
   */
  constructor(private todoService: TodoService) {}

  /**
   * Add a new todo.
   */
  onSubmit() {
    console.log(this.todoForm.value.todo);
    this.todoService.addTodo(this.todoForm.value.todo);
    this.todoForm.reset();
  }
}
