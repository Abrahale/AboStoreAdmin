import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoryService } from '../../services/category.service';
import { BaseStoreState, CategoryActions, CategorySelectors } from '../store';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  headers = ["Id","Name", "Description"];
  categories=[];
  categoryForm:any;
  constructor(private categoryService: CategoryService, private formBuilder:FormBuilder,private _store$:Store<BaseStoreState.State>) {
    this.categoryForm= new FormGroup({
      name: new FormControl('Abrahale',Validators.required),
      description: new FormControl('Software developer'),
    })
  }

  ngOnInit(): void {
    this._store$.select(CategorySelectors.selectData).subscribe(res =>{
      if(res != null ){
     res.result.forEach(e => {
           this.categories.push({
             id:e._id,
             name: e.name,
             description: e.description,
             })
         });
       }
    });
    this._store$.dispatch(new CategoryActions.LoadRequestAction());
  }

  submitNewCategory(){
    this.categoryService.AddNewCategory(this.categoryForm.getRawValue()).subscribe(ab => console.log(ab))
  }

}
