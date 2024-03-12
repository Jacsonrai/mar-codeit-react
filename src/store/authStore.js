// const token=localStorage.getItem("_token_")??null
const initialState={
    isLoggedIn:false
    // token:token
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLoggedIn:action.payload.isLoggedIn,
               
            }
        
        default:
            return state
    }


}

