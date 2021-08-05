import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from 'src/app/services/api-service.service';

import { Todo } from 'src/app/interfaces/todo';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public todos: Todo[] = [];    //todos array to hold only 5 of todos

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getTodoSource$.subscribe(data => {
      this.todos = data.slice(0, 5);
    });
  }

}
