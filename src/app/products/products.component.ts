import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/products.service';
import { BaseStoreState, ProductsActions, ProductsSelectors } from '../store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products=[];
  newProductsForm:any;
  constructor(private productsService: ProductService, private formBuilder:FormBuilder, private _store$:Store<BaseStoreState.State>) {
    this.newProductsForm= new FormGroup({
      productCode: new FormControl('code'),
      title: new FormControl('',Validators.required),
      imagePath: new FormControl(''),
      sku: new FormControl(''),
      manufacturer: new FormControl(''),
      available: new FormControl(false),
      inventory_id: new FormControl(),
      price: new FormControl(12),
      discount_id: new FormControl(),
      description: new FormControl('Just a description'),
    })
 }
headers = ["Id","First Name", "Last Name", "Email", "User Name", "Created Date"];

ngOnInit(): void {
  this._store$.select(ProductsSelectors.selectData).subscribe(res =>{
    if(res != null ){
      res.result.forEach(e => {
         this.products.push({
           id:e._id,
           name: e.name,
           description: e.description,
           })
       });
     }
  });
  this._store$.dispatch(new ProductsActions.LoadRequestAction());
}
  addNewProduct(){}
}
