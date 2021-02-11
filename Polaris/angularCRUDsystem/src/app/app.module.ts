import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { GraphComponent } from './graph/graph.component';
import { TablecontentComponent } from './tablecontent/tablecontent.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

import { DataTablesModule } from 'angular-datatables';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    GraphComponent,
    TablecontentComponent,
    PaymentlistComponent,
    OrderlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
