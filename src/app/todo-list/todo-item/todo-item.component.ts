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
  @Input() todo: { title: string; completed: boolean };
  @Input() index: number;
  @Input() isCompleted: boolean;

  constructor(private todoService: TodoService) {}

  completeTodo() {
    this.todoService.completeTodo(this.index);
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.index);
  }
}
