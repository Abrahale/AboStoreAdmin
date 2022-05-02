import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Helpers from '../../helpers/helpers';
import { BaseStoreState, UsersActions, UsersSelectors } from '../store';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  showNewUserComponent:boolean = false;
  newUserForm:any;
  constructor(private usersService: UsersService, private formBuilder:FormBuilder, private _store$:Store<BaseStoreState.State>) {
      this.newUserForm= new FormGroup({
        username: new FormControl('Abrahale',Validators.required),
        email: new FormControl('abrahale@gmail.com',[Validators.required, Validators.email]),
        telephone: new FormControl('0848398778'),
        first_name: new FormControl('Abrahale',Validators.required),
        last_name: new FormControl('Kiros',Validators.required),
        address: new FormControl('103 Doreen Str'),
        city: new FormControl('Pretoria'),
        country: new FormControl('South Africa'),
        postal_code: new FormControl('0083'),
        about_me: new FormControl('Software developer'),
      })
   }
  headers = ["First Name", "Last Name", "Email", "User Name", "Created Date"];
  ngOnInit(): void {
     this._store$.select(UsersSelectors.selectData).subscribe(res =>{
       if(res != null ){
      res.result.forEach(e => {
            this.users.push({
              first_name:e.first_name,
              last_name: e.last_name,
              email:e.email,
              username: e.last_name,
              created_date: e.createdDate,
              })
          });
        }
     });
    this._store$.dispatch(new UsersActions.LoadRequestAction());
    this.onChanges();
  }
  onChanges(): void {
    this.newUserForm.valueChanges.subscribe(val => {
        this._store$.dispatch( new UsersActions.UpdateFormInput(this.newUserForm.getRawValue()))
      });
  }

  // valueChanges(input){
  //   console.log(input)
  // }

  submitNewProfile(){
    console.log(this.newUserForm.getRawValue())
    this.usersService.AddNewProfile({...this.newUserForm.getRawValue(), password:Helpers.generatePassword()}).subscribe(ab => console.log(ab))
  }

}
