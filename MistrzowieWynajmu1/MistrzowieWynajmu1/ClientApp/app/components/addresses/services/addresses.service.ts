import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Address } from '../../../models/address';
import { AddressesBackendService } from '../../../services/addresses-backend.service';

@Injectable()
export class AddressesService {
    constructor(private addressesBackendService: AddressesBackendService) { };

    addAddress(newAddress: Address): Observable<number> {
        return this.addressesBackendService.addAddress(newAddress);
    }
    updateAddress(newAddress: Address): Observable<number> {
        return this.addressesBackendService.updateAddress(newAddress);
    }
    getAll(): Observable<Array<Address>> {
        return this.addressesBackendService.getAll();
    }
    getAddress(id: number): Observable<Address> {
        return this.addressesBackendService.getAddress(id);
    }

}