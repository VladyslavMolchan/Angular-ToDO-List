import { Component } from '@angular/core';

import { Todo } from '../../interface/toDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(newTitle: string): void {
    if (newTitle.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: newTitle,
      completed: false,
    };
    this.todos = [...this.todos, newTodo];
  }

  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter((t) => t.id !== todoId);
  }

  editTodo(editedTodo: Todo): void {
    const index = this.todos.findIndex((t) => t.id === editedTodo.id);
    if (index !== -1) {
      this.todos[index] = editedTodo;
    }
  }
}
