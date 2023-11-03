import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from '../todo.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [CommonModule, TodoItemComponent, TodoDetailsComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Object[]; // List of todos
  subscription: Subscription; // Subscription to todosChanged

  /**
   * Build the todo list component with its necessary dependencies, subscribe to todosChanged and update the list
   * whenever todos change, and get the initial list of todos.
   *
   * @param todoService - the todo service
   */
  constructor(private todoService: TodoService) {
    // When todos change, update the list
    this.subscription = this.todoService.todosChanged.subscribe(
      (todos: Object[]) => {
        this.todos = todos;
      }
    );

    this.todos = this.todoService.getTodos();
  }
}
