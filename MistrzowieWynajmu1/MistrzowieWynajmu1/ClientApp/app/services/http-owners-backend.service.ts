import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { OwnersBackendService } from './owners-backend.service';
import { Owner } from '../models/owner';


@Injectable()
export class HttpOwnersBackendService extends OwnersBackendService {
    private addOwnerUrl: string = "api/owners/addowner";
    private getOwnerUrl: string = "api/owners/getowner?ownerId=";
    private updateOwnerUrl: string = "api/owners/updateowner";
    private getAllUrl: string = "api/owners/getowners";

    private jsonContentOptions: RequestOptions;

    constructor(private http: Http) {
        super();
        let headerJson: Headers = new Headers({
            'Content-Type': 'application/json',
        });
        this.jsonContentOptions = new RequestOptions({ headers: headerJson })
    }

    addOwner(newOwner: Owner): Observable<number> {
        return this.http.post(this.addOwnerUrl, JSON.stringify(newOwner), this.jsonContentOptions).
            map(response => response.json() as number);
    }
    updateOwner(newOwner: Owner): Observable<number> {
        return this.http.post(this.updateOwnerUrl, JSON.stringify(newOwner), this.jsonContentOptions).
            map(response => response.json() as number);
    }
    getAll(): Observable<Array<Owner>> {
        return this.http.get(this.getAllUrl, this.jsonContentOptions).
            map(response => response.json() as Array<Owner>);
    }
    getOwner(id: number): Observable<Owner> {
        return this.http.get(this.getOwnerUrl, this.jsonContentOptions).
            map(response => response.json() as Owner);
    }
