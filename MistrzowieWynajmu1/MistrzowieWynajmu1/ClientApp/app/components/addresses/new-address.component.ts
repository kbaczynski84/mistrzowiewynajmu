﻿import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { Message } from 'primeng/api';
import { Address } from '../../models/address';
import { BaseComponent } from '../../common/base.component';
import { AddressesService } from '../addresses/services/addresses.service';


@Component({
    templateUrl: './new-address.component.html',
    selector: 'new-address',
})

export class NewAddressComponent extends BaseComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute,
        private addressesService: AddressesService,
        private location: Location
    ) { super(activatedRoute, location) };


    address: Address;
    urlParam: number;
    pageTitle: string = "Lokalizacja";
    isInAddressDetailsMode: boolean = false;

    @Input() recevedId: number;
    @Output() addressAddedEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        this.detectUrlParam();
        this.address = new Address();
        this.messages = new Array<Message>();
        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
            this.pageTitle = "Nowa lokalizacja";
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
            this.downloadAddress(this.recevedId);
            this.isInEditMode = true;
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-details/" + this.urlParam)) {
            this.downloadAddress(this.recevedId);
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/addresses/address-details/" + this.urlParam)) {
            this.downloadAddress(this.urlParam);
            this.isInAddressDetailsMode = true;
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/addresses/address-update/" + this.urlParam)) {
            this.downloadAddress(this.urlParam);
            this.isInAddressDetailsMode = true;
            this.isInEditMode = true;
        }
    }
    onSubmit(newAddress: Address): void {
        if ((this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) ||
            (this.location.isCurrentPathEqualTo("/owners/owner-update/" + this.urlParam))) {
            this.addressesService.updateAddress(newAddress).subscribe(
                id => {
                    this.showMessage(true, 'success', 'Confirmation', true, 'Owner has been updated successfully!');
                    this.addressAddedEvent.emit(id);
                },
                errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage));
        }
        else {
            this.addressesService.addAddress(newAddress).subscribe(
                id => {
                    this.showMessage(true, 'success', 'Confirmation', true, 'Owner has been created successfully!');
                    this.addressAddedEvent.emit(id);
                },
                errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage));
        }
    }
    detectUrlParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.urlParam = params['id'];
        })
    }
    downloadAddress(id: number): void {
        this.addressesService.getAddress(id).subscribe(
            address => this.address = address,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage))

    }
} 
