import { Subject } from 'rxjs';

export class TodoService {
  todosChanged = new Subject<Object[]>(); // A subject to notify subscribers when todos change
  filterChanged = new Subject<string>(); // A subject to notify subscribers when the selected filter changes

  private todos = [
    { title: 'Complete online JavaScript course', completed: true },
    { title: 'Jog around the park 3x', completed: false },
    { title: '10 minutes meditation', completed: false },
    { title: 'Read for 1 hour', completed: false },
    { title: 'Pick up groceries', completed: false },
    { title: 'Complete Todo App on Frontend Mentor', completed: false },
  ];
  private selectedFilter = 'all'; // The selected filter for the todo list

  /**
   * Gets the todos.
   *
   * @returns a copy of the todos array
   */
  getTodos() {
    return this.todos.slice();
  }

  /**
   * Gets the number of todos that are not completed.
   *
   * @returns the number of todos that are not completed
   */
  getTodosLeft() {
    return this.todos.reduce((count, todo) => {
      return count + (todo.completed ? 0 : 1);
    }, 0);
  }

  /**
   * Adds a todo.
   *
   * @param todo - the todo to add
   */
  addTodo(todo: string) {
    this.todos.push({ title: todo, completed: false });
    // Filter the todos with the current filter and notify subscribers that the todos
    // have changed
    this.filterTodos(this.selectedFilter);
  }

  /**
   * Completes a todo.
   *
   * @param index - the index of the todo to complete
   */
  completeTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    // Filter the todos with the current filter and notify subscribers that the todos
    // have changed
    this.filterTodos(this.selectedFilter);
  }

  /**
   * Deletes a todo.
   *
   * @param index - the index of the todo to delete
   */
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    // Filter the todos with the current filter and notify subscribers that the todos
    // have changed
    this.filterTodos(this.selectedFilter);
  }

  /**
   * Clears all completed todos.
   */
  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    // Filter the todos with the current filter and notify subscribers that the todos
    // have changed
    this.filterTodos(this.selectedFilter);
  }

  /**
   * Gets the selected filter.
   *
   * @returns the selected filter
   */
  getSelectedFilter() {
    return this.selectedFilter;
  }

  /**
   * Filters the todos and changes the selected filter.
   *
   * @param filter - the filter to apply to the todos
   */
  filterTodos(filter: string) {
    switch (filter) {
      case 'all':
        this.selectedFilter = 'all';
        this.filterChanged.next(this.selectedFilter);
        this.todosChanged.next(this.todos.slice());
        break;
      case 'active':
        this.selectedFilter = 'active';
        this.filterChanged.next(this.selectedFilter);
        this.todosChanged.next(this.todos.filter((todo) => !todo['completed']));
        break;
      case 'completed':
        this.selectedFilter = 'completed';
        this.filterChanged.next(this.selectedFilter);
        this.todosChanged.next(this.todos.filter((todo) => todo['completed']));
        break;
      default:
        this.filterChanged.next(this.selectedFilter);
        this.todosChanged.next(this.todos.slice());
    }
  }
}
