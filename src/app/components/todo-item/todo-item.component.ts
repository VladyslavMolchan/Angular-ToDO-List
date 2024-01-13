import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../interface/toDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo = { id: 0, title: '', completed: false };
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Todo>();

  editing: boolean = false;
  editedTitle: string = '';

  onDeleteClick(): void {
    this.delete.emit(this.todo.id);
  }

  onEditClick(): void {
    this.editing = true;
    this.editedTitle = this.todo.title;
  }

  onSaveEdit(): void {
    this.editing = false;
    this.todo.title = this.editedTitle;
    this.edit.emit(this.todo);
  }

  onCancelEdit(): void {
    this.editing = false;
  }
}
