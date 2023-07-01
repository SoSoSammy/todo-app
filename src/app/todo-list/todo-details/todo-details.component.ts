import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodoService } from 'src/app/todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-details',
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
})
export class TodoDetailsComponent {
  remainingTodos = this.todoService.getTodosLeft();
  subscription: Subscription;

  constructor(private todoService: TodoService) {
    // Update remaining todos when todos change
    this.todoService.todosChanged.subscribe(() => {
      this.remainingTodos = this.todoService.getTodosLeft();
    });
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }
}
