import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

//***Properties Section***\\
import { PropertiesComponent } from './components/properties/components/properties.component';
import { PropertiesService } from './components/properties/services/properties.service';
import { PropertiesBackendService } from './services/properties-backend.service';
import { HttpPropertiesBackendService } from './services/http-properties-backend.service';
import { Property } from './models/property';
import { PropertyDetailsComponent } from './components/properties/components/property-details.component';

//***Address Section***\\
import { AddressesComponent } from './components/addresses/addresses.component';
import { NewAddressComponent } from './components/addresses/new-address.component';
import { AddressesService } from './components/addresses/services/addresses.service';
import { AddressesBackendService } from './services/addresses-backend.service';
import { HttpAddressesBackendService } from './services/http-addresses-backend.service';
import { Address } from './models/address';

//***Owners Section***\\
import { OwnersComponent } from './components/owners/owners.component';
import { NewOwnerComponent } from './components/owners/new-owner.component';
import { OwnersService } from './components/owners/services/owners.service';
import { OwnersBackendService } from './services/owners-backend.service';
import { HttpOwnersBackendService } from './services/http-owners-backend.service';
import { Owner } from './models/owner';

//***Reports Section***\\
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsService } from './components/reports/services/reports.service';
import { ReportsBackendService } from './services/reports-backend.service';
import { HttpReportsBackendService } from './services/http-reports-backend.service';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';
import { ChartModule } from 'primeng/chart';
import '../../node_modules/chart.js/dist/Chart.js';
import { ProgressSpinnerModule } from 'primeng/progressspinner';





@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PropertiesComponent,
        PropertyDetailsComponent,
        NewAddressComponent,
        AddressesComponent,
        NewOwnerComponent,
        OwnersComponent,
        ReportsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        GrowlModule,
        ChartModule,
        ProgressSpinnerModule,
        ConfirmDialogModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'properties', component: PropertiesComponent },
            { path: 'properties/new-property', component: PropertyDetailsComponent },
            { path: 'properties/property-details/:id', component: PropertyDetailsComponent },
            { path: 'properties/property-update/:id', component: PropertyDetailsComponent },
            { path: 'owners', component: OwnersComponent },
            { path: 'owners/owner-details/:id', component: NewOwnerComponent },
            { path: 'owners/owner-update/:id', component: NewOwnerComponent },
            { path: 'addresses', component: AddressesComponent },
            { path: 'addresses/address-details/:id', component: NewAddressComponent },
            { path: 'addresses/address-update/:id', component: NewAddressComponent },
            { path: 'reports/types-report', component: ReportsComponent },
            { path: 'reports/properties-report', component: ReportsComponent },
            { path: '**', redirectTo: 'properties' }
        ])
    ],
    providers: [
        PropertiesService,
        { provide: PropertiesBackendService, useClass: HttpPropertiesBackendService },
        OwnersService,
        { provide: OwnersBackendService, useClass: HttpOwnersBackendService },
       AddressesService,
        { provide: AddressesBackendService, useClass: HttpAddressesBackendService },
        ReportsService,
        { provide: ReportsBackendService, useClass: HttpReportsBackendService },
    ]
})
export class AppModuleShared {
}
