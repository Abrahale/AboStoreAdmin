import { SignInState } from "./sign-in";
import { ProductsState } from "./products";
import { UsersState } from ".";
export interface State{
  singIn:SignInState.State;
  products: ProductsState.State;
  users: UsersState.State;
}
