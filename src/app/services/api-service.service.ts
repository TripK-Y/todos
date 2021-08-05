import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  //Local todos array
  public allTodos: Todo[] = [];

  // Observable sources
  private getTodoSources = new Subject<Todo[]>();
  // Observable streams
  public getTodoSource$ = this.getTodoSources.asObservable();

  constructor(private http: HttpClient) {
    this.getAllTodos();
  }

  // Http call to get all todos
  public getAllTodos() {
    this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .subscribe(data => {
        this.allTodos = data;
        this.getTodoSources.next(this.allTodos);
      });
  }

  // Http call to add new todos
  public createTodo(postData: Todo) {
    this.http.post("https://jsonplaceholder.typicode.com/todos", postData)
      .subscribe({
        next: data => {
          console.log(data);
          this.allTodos.splice(0, 0, postData);
          this.getTodoSources.next(this.allTodos);
        },
        error: error => {
          console.error('There was an error in creation!', error);
        }
      });

  }

  public updateTodo(id: number) { 
    for (let i = 0; i < this.allTodos.length; i++) {
      if (this.allTodos[i].id === id) {
        this.allTodos[i].completed = true;
        this.getTodoSources.next(this.allTodos);
      }
    }
  }

  // Http call to delete todos
  public deleteTodo(id: number) {
    this.http.delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .subscribe({
        next: data => {
          console.log(data);
          for (let i = 0; i < this.allTodos.length; i++) {
            if (this.allTodos[i].id === id) {
              this.allTodos.splice(i, 1);
              this.getTodoSources.next(this.allTodos);
            }
          }
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

}
