import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DepartmentService } from '../../services/department.service';
import { BaseStoreState, DepartmentActions, DepartmentSelectors } from '../store';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  headers = ["Id","Name", "Description"];
  departments=[];
  departmentForm:any;
  constructor(private departmentService: DepartmentService, private formBuilder:FormBuilder,private _store$:Store<BaseStoreState.State>) {
    this.departmentForm= new FormGroup({
      name: new FormControl('Abrahale',Validators.required),
      description: new FormControl('Software developer'),
    })
  }
    ngOnInit(): void {
      this._store$.select(DepartmentSelectors.selectData).subscribe(res =>{
        if(res != null ){
       res.result.forEach(e => {
             this.departments.push({
               id:e._id,
               name: e.name,
               description: e.description,
               })
           });
         }
      });
      this._store$.dispatch(new DepartmentActions.LoadRequestAction());
    }
  
    submitNewCategory(){
      this.departmentService.AddNewDepartment(this.departmentForm.getRawValue()).subscribe(ab => console.log(ab))
    }

}
