import { FETCH_FAILURE,FETCH_SUCCESS,FETCH_REQUEST } from "./action";
const initialState={
  data:[],
  isLoading:false,
  error:null
}

 const reducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_REQUEST:
      return{
        ...state,
        isLoading:true,
        error:null
      };
    case FETCH_SUCCESS:
      return{
        ...state,
        isLoading:false,
        data:action.payload.data
      };
    case FETCH_FAILURE:
      return{
        ...state,
        isLoading:false,
        error:action.payload
      };
      default:
        return state;
  }

}

export default reducer