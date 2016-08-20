import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RaceService {
    _http: any;
    constructor( @Inject(Http) http) {
        this._http = http;
    }
    list() {
        return this._http.get('http://localhost:9000/races').map(res => res.json());
    }
}