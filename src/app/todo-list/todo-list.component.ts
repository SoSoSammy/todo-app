import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos = [
    'Complete online JavaScript course',
    'Jog around the park 3x',
    '10 minutes meditation',
    'Read for 1 hour',
    'Pick up groceries',
    'Complete Todo App on Frontend Mentor',
  ];
}
