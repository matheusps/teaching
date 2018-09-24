import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlConfig } from '../_config/url.config';
import { Todo } from '../_model/todo';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get(UrlConfig.apiUrl + '/todo');
    }

    public getById(_id: string) {
        return this.http.get(UrlConfig.apiUrl + '/todo/' + _id);
    }

    public create(todo: Todo) {
        return this.http.post(UrlConfig.apiUrl + '/todo', todo);
    }

    public update(id, todo: Todo) {
      return this.http.put(UrlConfig.apiUrl + '/todo/' + id, {text: todo.text, isDone: !todo.isDone});
    }

    public delete(_id: string) {
        return this.http.delete(UrlConfig.apiUrl + '/todo/' + _id);
    }
}
