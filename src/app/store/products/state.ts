import { BaseResponse } from "src/app/models/baseResponse.model";
import { product } from "src/models/products";

export interface State{
    products: product[],
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  products: [], 
  isLoading: false,
  error: ""
}
