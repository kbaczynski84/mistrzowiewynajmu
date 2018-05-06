import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { TypeRatioReport, PropertyPerCityRatioReport } from '../../../models/report';
import { ReportsBackendService } from '../../../services/reports-backend.service';

@Injectable()
export class ReportsService {
    constructor(private reportsBackendService: ReportsBackendService) { };

    getTypesRatio(): Observable<TypeRatioReport>  {
        return this.reportsBackendService.getTypesRatioReport();
    }
    getPropertiesPerCity(): Observable<Array<PropertyPerCityRatioReport>>  {
        return this.reportsBackendService.getPropertiesPerCityReport();
    }

}