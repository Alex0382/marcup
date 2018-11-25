export const USER_ACTION = 'Change Value';
export default function userAction(user){
    return{
        type:USER_ACTION,
        payload:user
    }
};