import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from '../todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-filter',
  imports: [CommonModule],
  templateUrl: './todo-filter.component.html',
})
export class TodoFilterComponent {
  selectedFilter = 'all';

  constructor(private todoService: TodoService) {}

  filterAll() {
    this.todoService.filterTodos('all');
    this.selectedFilter = 'all';
  }

  filterActive() {
    this.todoService.filterTodos('active');
    this.selectedFilter = 'active';
  }

  filterCompleted() {
    this.todoService.filterTodos('completed');
    this.selectedFilter = 'completed';
  }
}
