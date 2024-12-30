import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StatisticsModule } from './features/statistics/statistics.module';
import { TopupModule } from './features/topup/topup.module';
import { HistoricalModule } from './features/historical/historical.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    TopupModule,
    StatisticsModule,
    HistoricalModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
