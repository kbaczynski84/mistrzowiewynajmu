import { Component, OnInit } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnersService } from '../owners/services/owners.service';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/components/common/api';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent } from '../../common/base.component';



@Component({
    templateUrl: './owners.component.html',
    providers: [ConfirmationService],
})


export class OwnersComponent extends BaseComponent implements OnInit {
    constructor(
        private ownersService: OwnersService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private confirmationService: ConfirmationService,

        private router: Router
    ) { super(activatedRoute, location) };


    owners: Array<Owner> = new Array<Owner>();
    pageTitle: string = "Lista właścicieli";


    ngOnInit(): void {

       
        this.downloadOwners();
    }

    downloadOwners(): void {

        this.ownersService.getAll().subscribe(
            ownersFromDb => this.owners = ownersFromDb,
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage)
        );
    }

    getOwner(id: number): void {
        this.router.navigate(['./owners/owner-details', id]);
    }

    updateOwner(id: number): void {
        this.router.navigate(['./owners/owner-update', id]);
    }



    }

