import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({providedIn:'root'})
export class TodoService {
    private url = '../../../assets/data/todo.json';
    constructor(private httpClient: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(this.url);
    }
    
    removeTodo(content: String) {
        console.log("Appeler l'API avec + " + content);
    }
}