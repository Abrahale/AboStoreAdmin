import { BaseResponse } from "src/app/models/baseResponse.model";
import { userForm } from "src/app/models/usersForm.model";

export interface State{
    data: BaseResponse<any> | null,
    formData: userForm,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
  data: null,
  isLoading: false,
  formData:null,
  error:""
}
