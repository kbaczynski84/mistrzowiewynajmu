import { Component, OnInit ,EventEmitter, Output} from "@angular/core";
import { Property } from '../../../models/property';
import { PropertiesService } from '../services/properties.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
//import { Message } from 'primeng/components/common/api';
import { Owner } from '../../../models/owner';
import { Address } from '../../../models/address';
import { BaseComponent } from '../../../common/base.component';
import { ConfirmationService, Message } from 'primeng/components/common/api';


@Component({
    templateUrl: './property-details.component.html',
    providers: [ConfirmationService],
})

export class PropertyDetailsComponent extends BaseComponent implements OnInit{
    constructor(private propertiesService: PropertiesService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
    private confirmationService: ConfirmationService, )

    { super(activatedRoute, location) };

  
    urlParam: number;
    pageTitle: string;
    ownerBtnTitle: string = 'Dane właściciela';
    addressBtnTitle: string = 'Lokalizacja';

    owner: Owner = new Owner();
    address: Address = new Address();
    property: Property = new Property();

    isInEditMode: boolean = false;
    isNewOwnerModeActivated: boolean = false;
    isNewAddressModeActivated: boolean = false;
   
    ownerAddedEvent(id: number): void {
        this.property.ownerId = id;
    }
    addressAddedEvent(id: number): void {
        this.property.addressId = id;
    }

    ngOnInit(): void {
        this.messages = new Array<Message>();
        this.detectUrlParam();
        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
            this.isInEditMode = true;
            this.pageTitle = "Nowa nieruchomość";
            this.ownerBtnTitle = "Dodaj właściciela";
            this.addressBtnTitle = "Dodaj lokalizację";
          
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
            this.isInEditMode = true;
            this.pageTitle = "Aktualizacja nieruchomości";
            this.ownerBtnTitle = "Aktualizuj właściciela";
            this.addressBtnTitle = "Aktualizuj lokalizację";
            this.downloadProperty();
            
        }
        else {
            this.pageTitle = "Szczegóły nieruchomości";
            this.isInEditMode = false;
            this.downloadProperty();
        }

    }
    activateNewAddressMode(): void {
        this.isNewAddressModeActivated == true ?
            this.isNewAddressModeActivated = false : this.isNewAddressModeActivated = true;
    }
    activateNewOwnerMode(): void {
        this.isNewOwnerModeActivated == true ?
            this.isNewOwnerModeActivated = false : this.isNewOwnerModeActivated = true;
    }

    onSubmit(propObj: Property): void {
        if ((propObj.addressId == undefined || propObj.addressId <= 0) || (propObj.ownerId == undefined || propObj.ownerId <= 0)) {
            this.showMessage(true, 'warn', 'Warning!', false, 'Before submitting you need to create owner and address first!');
        }
        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
          
            this.propertiesService.addProperty(propObj).subscribe(
                onSuccess => this.showMessage(true, 'success', 'Confirmation', true, 'Property has been created successfully!'),
                errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage))
        }
        else {
            this.propertiesService.updateProperty(propObj).subscribe(
                onSuccess => this.showMessage(true, 'success', 'Confirmation', true, 'Property has been updated successfully!'),
                errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage))
        }
    }

    downloadProperty(): void {
        this.propertiesService.getProperty(this.urlParam).subscribe(
            propertyFromDb => this.property = propertyFromDb,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage))
    }

    detectUrlParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.urlParam = params['id']
        });
    }
  
}