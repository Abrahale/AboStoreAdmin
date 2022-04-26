import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products=[];
  newProductsForm:any;
  constructor(private productsService: ProductService, private formBuilder:FormBuilder) {
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
  this.productsService.getAllProducts().subscribe(res => {
    res.result.forEach(e => {
      this.products.push({
        title:e.title,
        imagePath:e.imagePath,
        sku: e.sku,
        manufacturer: e.manufacturer,
        available: e.available ? 'true' : false,
        id:e._id
      })
    });
  })
}
  addNewProduct(){}
}
