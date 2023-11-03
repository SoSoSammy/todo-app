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
  remainingTodos = this.todoService.getTodosLeft(); // Number of todos not completed
  subscription: Subscription; // Subscription to todosChanged

  /**
   * Build the todo details component with its necessary dependencies, subscribe to todosChanged and update the
   * remaining todos whenever todos change.
   *
   * @param todoService - the todo service
   */
  constructor(private todoService: TodoService) {
    // Update remaining todos when todos change
    this.todoService.todosChanged.subscribe(() => {
      this.remainingTodos = this.todoService.getTodosLeft();
    });
  }

  /**
   * Clear all completed todos.
   */
  clearCompleted() {
    this.todoService.clearCompleted();
  }
}
