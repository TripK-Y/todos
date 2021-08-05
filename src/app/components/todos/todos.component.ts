import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() public todoInput!: Todo;
  public hideShowDetails: boolean = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
  }

  // function is called when user wants to see more details
  public detailsTodo() {
    this.hideShowDetails = !this.hideShowDetails;
  }

  // function is called when user wants to delete a todo
  public deleteTodo() {
    this.apiService.deleteTodo(this.todoInput.id);
  }

  // function is called when user completed the todo 
  public completeStatus(){
    this.apiService.updateTodo(this.todoInput.id);
  }
}
