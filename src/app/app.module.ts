import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders,  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BaseStoreModule } from './store';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuQcXVDEaQWWIEnEl3GK_mXUzkldRVAoM'
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BaseStoreModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class AdminModule{
  static forRoot(): ModuleWithProviders<AdminModule> {
    return {
        ngModule:AppModule,
        providers: []
    }
  }
}
