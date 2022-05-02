import { BaseResponse } from "src/app/models/baseResponse.model";

export interface State{
    data: BaseResponse<any> | null,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
 data: null,
  isLoading: false,
  error:""
}
