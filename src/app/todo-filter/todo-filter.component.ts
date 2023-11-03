import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { TodoService } from '../todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-filter',
  imports: [CommonModule],
  templateUrl: './todo-filter.component.html',
})
export class TodoFilterComponent {
  selectedFilter: string; // The selected filter for the todo list
  subscription: Subscription; // Subscription to filterChanged

  /**
   * Build the todo filter component with its necessary dependencies, subscribe to filterChanged and update the
   * selected filter whenever the filter changes, and get the initial filter.
   *
   * @param todoService - the todo service
   */
  constructor(private todoService: TodoService) {
    this.subscription = this.todoService.filterChanged.subscribe(
      (filter: string) => {
        this.selectedFilter = filter;
      }
    );
    this.selectedFilter = this.todoService.getSelectedFilter();
  }

  /**
   * Filter the todo list by all todos.
   */
  filterAll() {
    this.todoService.filterTodos('all');
  }

  /**
   * Filter the todo list by active todos.
   */
  filterActive() {
    this.todoService.filterTodos('active');
  }

  /**
   * Filter the todo list by completed todos.
   */
  filterCompleted() {
    this.todoService.filterTodos('completed');
  }
}
