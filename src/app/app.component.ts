import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseStoreState, CategoryActions, DepartmentActions, ProductsActions } from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _store$:Store<BaseStoreState.State>){
    this._store$.dispatch(new DepartmentActions.LoadRequestAction());
    this._store$.dispatch(new CategoryActions.LoadRequestAction());
    this._store$.dispatch(new ProductsActions.LoadRequestAction());
  }
}
