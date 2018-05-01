﻿import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
//import { Message } from 'primeng/api';
import { Owner } from '../../models/owner';
import { BaseComponent } from '../../common/base.component';
import { OwnersService } from './services/owners.service';
import { ConfirmationService, Message } from 'primeng/components/common/api';


@Component({
    templateUrl: './new-owner.component.html',
    selector: 'new-owner',
    providers: [ConfirmationService],
})

export class NewOwnerComponent extends BaseComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute,
        private ownersService: OwnersService,
        private location: Location,
        private confirmationService: ConfirmationService
    ) { super(activatedRoute, location) };


    owner: Owner;
    urlParam: number;
    pageTitle: string = "Dane właściciela";
    isInOwnerDetailsMode: boolean = false;

    @Input() recevedId: number;
    @Output() ownerAddedEvent: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        this.detectUrlParam();
        this.owner = new Owner();
        this.messages = new Array<Message>();
        if (this.location.isCurrentPathEqualTo("/properties/new-property")) {
            this.pageTitle = "Nowy właściciel";
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) {
            this.downloadOwner(this.recevedId);
            this.isInEditMode = true;
        }
        else if (this.location.isCurrentPathEqualTo("/properties/property-details/" + this.urlParam)) {
            this.downloadOwner(this.recevedId);
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/owners/owner-details/" + this.urlParam)) {
            this.downloadOwner(this.urlParam);
            this.isInOwnerDetailsMode = true;
            this.isInEditMode = false;
        }
        else if (this.location.isCurrentPathEqualTo("/owners/owner-update/" + this.urlParam)) {
            this.downloadOwner(this.urlParam);
            this.isInOwnerDetailsMode = true;
            this.isInEditMode = true;
        }
    }
        onSubmit(newOwner: Owner): void {
            if ((this.location.isCurrentPathEqualTo("/properties/property-update/" + this.urlParam)) ||
                (this.location.isCurrentPathEqualTo("/owners/owner-update/" + this.urlParam))) {
                this.ownersService.updateOwner(newOwner).subscribe(
                    id => {
                        this.showMessage(false, 'success', 'Confirmation', false, 'Owner has been updated successfully!');
                        this.ownerAddedEvent.emit(id);
                    },
                    errorMessage => this.showMessage(false, 'warn', 'Information', false, errorMessage));
            }
            else {
                this.ownersService.addOwner(newOwner).subscribe(
                    id => {
                        this.showMessage(false, 'success', 'Confirmation', false, 'Owner has been created successfully!');
                        this.ownerAddedEvent.emit(id);
                    },
                    errorMessage => this.showMessage(false, 'warn', 'Information', false, errorMessage));
            }
    }
    detectUrlParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.urlParam = params['id'];
        })
    }
    downloadOwner(id: number): void {
        this.ownersService.getOwner(id).subscribe(
            owner => this.owner = owner,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage))
        
    }
} 
