import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
}
