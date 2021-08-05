export class Todo {

    id: number;
    completed: boolean;
    userId: number;
    title: string;

    constructor(id: number, completed: boolean, userId: number, title: string) {
        this.id = id;
        this.completed = completed;
        this.userId = userId;
        this.title = title;
    }
}
