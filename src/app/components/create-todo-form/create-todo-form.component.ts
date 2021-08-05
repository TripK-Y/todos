import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
	selector: 'app-create-todo-form',
	templateUrl: './create-todo-form.component.html',
	styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

	createTodoForm = this.formBuilder.group({
		id: '',
		title: '',
		completed: false
	});

	constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) { }

	ngOnInit(): void {
	}

	// gets object data from form and create new todo
	public addTodo() {
		this.apiService.createTodo(this.createTodoForm.value);
		this.createTodoForm.reset(); //resets form
	}

}
