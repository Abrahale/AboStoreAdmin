import { SignInState } from "./sign-in";
import { ProductsState } from "./products";
import { CategoryState, DepartmentState, UsersState } from ".";
export interface State{
  singIn:SignInState.State;
  products: ProductsState.State;
  users: UsersState.State;
  department:DepartmentState.State;
  category:CategoryState.State;
}
