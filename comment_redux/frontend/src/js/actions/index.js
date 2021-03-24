// import { commentReducer } from "../../reducers/commentReducer"
// import {ADD_COMMENT} from "./constants/action-types"
// export const addComment=comment=>({
//     type:ADD_COMMENT,
//     payload:comment
// });
export const increment=()=>{
    return {
        type:'INCREMENT',
    }
}
export const decrement=()=>{
    return {
        type:'DECREMENT'
    }
}
export const customisedMultiplication=(num)=>{
    console.log(num+"k")
    return {
        type:'MULTIPLY BY PAYLOAD',
        payload:num
       
    }
}
export const login=()=>{
    return {
        type:'SIGN_IN'
    }
}
export const check=()=>{
    return {
        type:'1'
    }
}