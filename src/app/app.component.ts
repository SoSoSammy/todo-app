import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, NewTodoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
}
