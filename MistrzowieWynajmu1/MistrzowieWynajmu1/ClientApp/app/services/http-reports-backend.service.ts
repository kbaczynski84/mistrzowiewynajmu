import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { ReportsBackendService } from './reports-backend.service';
import { TypeRatioReport, PropertyPerCityRatioReport } from '../models/report';


@Injectable()
export class HttpReportsBackendService extends ReportsBackendService {
    private getPropertiesPerCityReportUrl: string = 'api/reports/getpropertiespercityreport';
    private getTypesRatioReportUrl: string = 'api/reports/gettypesratioreport';
  

    private jsonContentOptions: RequestOptions;

    constructor(private http: Http) {
        super();
        let headerJson: Headers = new Headers({
            'Content-Type': 'application/json'
        })
        this.jsonContentOptions = new RequestOptions({ headers: headerJson })
    }

    getTypesRatioReport(): Observable<TypeRatioReport> {
        return this.http.get(this.getTypesRatioReportUrl, this.jsonContentOptions).
            map(response => response.json() as TypeRatioReport);
    }
    getPropertiesPerCityReport(): Observable<Array<PropertyPerCityRatioReport>> {
        return this.http.get(this.getPropertiesPerCityReportUrl, this.jsonContentOptions).
            map(response => response.json() as Array<PropertyPerCityRatioReport>);
    }
    }
