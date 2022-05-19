import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/products.service';
import { BaseStoreState, CategorySelectors, DepartmentSelectors, ProductsActions, ProductsSelectors } from '../store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products=[];
  departments;
  category;
  newProductsForm:any;
  constructor(private productsService: ProductService, private formBuilder:FormBuilder, private _store$:Store<BaseStoreState.State>) {
    this.newProductsForm= new FormGroup({
      productCode: new FormControl(''),
      category: new FormControl(''),
      department: new FormControl(''),
      title: new FormControl('',Validators.required),
      imagePath: new FormControl(''),
      sku: new FormControl(''),
      manufacturer: new FormControl(''),
      available: new FormControl(false),
      inventory_id: new FormControl(),
      price: new FormControl(12),
      discount_id: new FormControl(),
      description: new FormControl('Just a description'),
      file: new FormControl()
    })
 }
 get f(){
  return this.newProductsForm.controls;
}
onFileChange(event){
  console.log(event)
}
headers = ["Product Title", "Product Code", "Manufacturer","Category", "Description","Created Date"];
ngOnInit(): void {
  this._store$.select(ProductsSelectors.selectData).subscribe(res =>{
    if(res != null ){
      res.forEach(e => {
         this.products.push({
           title:e.title,
           productCode: e.productCode,
           //sku:e.sku,
           manufacturer:e.manufacturer, 
           category: e.category,          
           description: e.description,
           createdDate: e.createdDate
           })
       });
     }
  });
  this.departments = this.getDepartmentlist()
  this.category = this.getCategorylist()
}
getDepartmentlist = () =>{
  let depList = [];
  this._store$.select(DepartmentSelectors.selectData).subscribe(res =>{
    console.log(res)
    if(res != null ){
      res.result.forEach(e => {
        depList.push({value:e._id, name: e.name})
      })
    }
  })
  return depList;
}
getCategorylist = () =>{
  let catList = [];
  this._store$.select(CategorySelectors.selectData).subscribe(res =>{
    console.log(res)
    if(res != null ){
      res.result.forEach(e => {
        catList.push({value:e._id, name: e.name})
      })
    }
  })
  return catList;
}
  addNewProduct(){
    this.productsService.AddNewProduct(this.newProductsForm.getRawValue()).subscribe(a=>console.log(a))
  }
}
