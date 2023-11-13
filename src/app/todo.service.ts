import { Subject } from 'rxjs';

export class TodoService {
  todosChanged = new Subject<Object[]>();

  private todos = [
    { title: 'Complete online JavaScript course', completed: true },
    { title: 'Jog around the park 3x', completed: false },
    { title: '10 minutes meditation', completed: false },
    { title: 'Read for 1 hour', completed: false },
    { title: 'Pick up groceries', completed: false },
    { title: 'Complete Todo App on Frontend Mentor', completed: false },
  ];

  getTodos() {
    return this.todos.slice(); // return a copy of the array
  }

  // Get the number of todos that are not completed
  getTodosLeft() {
    return this.todos.reduce((count, todo) => {
      return count + (todo.completed ? 0 : 1);
    }, 0);
  }

  addTodo(todo: string) {
    this.todos.push({ title: todo, completed: false });
    // Notify subscribers that the todos have changed
    this.todosChanged.next(this.todos.slice());
  }

  completeTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    // Notify subscribers that the todos have changed
    this.todosChanged.next(this.todos.slice());
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    // Notify subscribers that the todos have changed
    this.todosChanged.next(this.todos.slice());
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    // Notify subscribers that the todos have changed
    this.todosChanged.next(this.todos.slice());
  }

  filterTodos(filter: string) {
    switch (filter) {
      case 'all':
        return this.todosChanged.next(this.todos.slice());
      case 'active':
        return this.todosChanged.next(
          this.todos.filter((todo) => !todo['completed'])
        );
      case 'completed':
        return this.todosChanged.next(
          this.todos.filter((todo) => todo['completed'])
        );
      default:
        this.todosChanged.next(this.todos.slice());
    }
  }
}
