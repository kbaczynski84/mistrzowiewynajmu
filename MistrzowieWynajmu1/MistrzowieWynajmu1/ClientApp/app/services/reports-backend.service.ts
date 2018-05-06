import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeRatioReport, PropertyPerCityRatioReport } from '../models/report';


@Injectable()
export abstract class ReportsBackendService {
    abstract getTypesRatioReport(): Observable<TypeRatioReport>;
    abstract getPropertiesPerCityReport(): Observable<Array<PropertyPerCityRatioReport>>;
 
}