import { BaseResponse } from "src/app/models/baseResponse.model";

export interface State{
    data: BaseResponse<any>,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data: {
    status:false,
    payload:null
  },
  isLoading: false,
  error: ""
}
