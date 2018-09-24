import { Component } from '@angular/core';
import { TodoService } from './_service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todoModel;
  public todos;

  constructor( private todoService: TodoService ) {
    this.todoModel = {text: "", isDone: false};
    this.getTodos();
  }

  private getTodos = function () {
    this.todoService.getAll().subscribe(
      data => {
        this.todos = data;
      }, err => {
        console.log(err);
      });
  }

  public addTodo = function() {
    this.todoService.create(this.todoModel).subscribe(
      data => {
        this.todos.push(data);
        this.todoModel = {text: "", isDone: false};
      }, err => {
        console.log(err);
      });
  }

  public removeTodo = function(todo:any) {
    var index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todoService.delete(todo.id).subscribe(
        data => {
          this.todos.splice(index, 1);
        }, err => {
          console.log(err);
        });
    }
  }

  public toggleTodo = function(todo:any) {
    var index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todoService.update(this.todos[index].id, this.todos[index]).subscribe(
        data => {
          this.todos[index].isDone = !this.todos[index].isDone;
        }, err => {
          console.log(err);
        });
    }
  }
}
