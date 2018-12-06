import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recall } from './recall.model';

@Injectable({providedIn:'root'})
export class RecallerService {
    private url = '../../../assets/data/recall.json';
    constructor(private httpClient: HttpClient) { }

    getRecalls(): Observable<Recall[]> {
        return this.httpClient.get<Recall[]>(this.url);
    }
}