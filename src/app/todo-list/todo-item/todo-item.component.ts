import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  imports: [CommonModule],
})
export class TodoItemComponent {
  @Input() todo: { title: string; completed: boolean }; // The todo
  @Input() index: number; // The index of the todo
  @Input() isCompleted: boolean; // Whether the todo is completed

  /**
   * Build the todo item component with its necessary dependencies.
   *
   * @param todoService - the todo service
   */
  constructor(private todoService: TodoService) {}

  /**
   * Toggle the todo's completed status.
   */
  completeTodo() {
    this.todoService.completeTodo(this.index);
  }

  /**
   * Delete the todo.
   */
  deleteTodo() {
    this.todoService.deleteTodo(this.index);
  }
}
