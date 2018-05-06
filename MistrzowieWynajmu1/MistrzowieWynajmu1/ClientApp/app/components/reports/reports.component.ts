import { Component, OnInit } from '@angular/core';
import { TypeRatioReport, PropertyPerCityRatioReport } from '../../models/report';
import { ReportsService } from '../reports/services/reports.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent } from '../../common/base.component';
import { ConfirmationService, Message } from 'primeng/components/common/api';



@Component({
    templateUrl: './reports.component.html',
    providers: [ConfirmationService],
})


export class ReportsComponent extends BaseComponent implements OnInit {
    constructor(
        private reportsService: ReportsService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private confirmationService: ConfirmationService,
        private router: Router
    ) { super(activatedRoute, location) };

    data: any;
    isDataReady: boolean = false;
    pageTitle: string;
    isInRaportOneMode: boolean = false;
    isInRaportTwoMode: boolean = false;


    ngOnInit(): void {
        
        if (this.location.isCurrentPathEqualTo("/reports/types-report")) {
            this.pageTitle = "Stosunek ilości domów do mieszkań:";
            this.isInRaportOneMode = true;
            this.getTypesReport();
        }
        else if (this.location.isCurrentPathEqualTo("/reports/properties-report" )) {
            this.pageTitle = "Liczba nieruchomosci w poszczególnych miastach:";
            this.isInRaportTwoMode = true;
            this.getPropertiesPerCityReport();
        }
       
        }

    getTypesReport(): void {
        this.reportsService.getTypesRatio().subscribe(
            rtnData => {
                this.isDataReady = true;
                this.data = {
                    labels: ['Liczba domów', 'Liczba mieszkań'],
                    datasets: [
                        {
                            data: [rtnData.houses, rtnData.flats],
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB"

                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB"

                            ]
                        }]
                };
            },
            errorMessage => this.showMessage(true, 'warn', 'Information', false, errorMessage));

        
    }

    getPropertiesPerCityReport(): void {
        this.reportsService.getPropertiesPerCity().subscribe(
            rtnData => {
                let cityArray = Array<string>();
                let amountArray = Array<number>();
                this.isDataReady = true;
                for (let elem of rtnData) {
                    cityArray.push(elem.city);
                    amountArray.push(elem.amount);
                }
                this.data = {
                    labels: cityArray,
                    datasets: [
                        {
                            label: 'Liczba nieruchomości',
                            backgroundColor: '#42A5F5',
                            borderColor: '#1E88E5',
                            data: amountArray
                        }     
                    ]
                }
            }
            );
    }
    }

   



