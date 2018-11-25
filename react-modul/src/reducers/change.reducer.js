import * as userAction from '../actions/user.action';
import Img from '../image/avatar.jpg';
const initialState ={
    user:{
        avatar:Img,
        name:"Ivan",
        surname:"Ivanov",
        email:"ivanov@gmail.com",
        date:"1918-07-31",
    }
};

export default function UserReducer(state=initialState,action){
    switch(action.type){
        case userAction.USER_ACTION:
            return{
                ...state, user: action.payload
            }
            default:
                return state
    }

}