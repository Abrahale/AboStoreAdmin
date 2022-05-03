import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SignInStoreModule } from "./sign-in/signInStore.module";
import { ProductsStoreModule } from "./products";
import { UsersStoreModule } from "./users";
import { DepartmentStoreModule } from "./department";
import { CategoryStoreModule } from "./category";

@NgModule({
  declarations:[],
  imports:[
    SignInStoreModule,
    ProductsStoreModule,
    UsersStoreModule,
    DepartmentStoreModule,
    CategoryStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  exports:[]
})

export class BaseStoreModule{};
