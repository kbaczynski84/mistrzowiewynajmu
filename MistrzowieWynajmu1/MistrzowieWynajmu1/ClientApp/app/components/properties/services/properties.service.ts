import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Property } from '../../../models/property';
import { PropertiesBackendService } from '../../../services/properties-backend.service';

@Injectable()
export class PropertiesService {

    constructor(private propertiesBackendService: PropertiesBackendService) { }

    addProperty(newProperty: Property): Observable<number> {
        return this.propertiesBackendService.addProperty(newProperty);
    }
    getProperty(id: number): Observable<Property> {
        return this.propertiesBackendService.getProperty(id);
    }
    getProperties(): Observable<Property[]> {
        return this.propertiesBackendService.getProperties();
    }
    updateProperty(propertyToUpdate: Property): Observable<number> {
        return this.propertiesBackendService.updateProperty(propertyToUpdate);
    }
    deletePropert(id: number): Observable<number> {
        return this.propertiesBackendService.deleteProperty(id);
    }
}