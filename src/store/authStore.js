const token=localStorage.getItem("news_token")??null
const initialState={
    isLoggedIn:token!==null?true:false
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

