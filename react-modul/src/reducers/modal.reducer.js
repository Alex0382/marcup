import * as  openModal from '../actions/open.modal';
import * as  closeModal from '../actions/close.modal';

const initialState ={
    isOpen:false
};

export default function ModalReducer(state=initialState,action){
    switch(action.type){
        case openModal.OPEN_MODAL:
            return{
                ...state, isOpen:true
            };
            case closeModal.CLOSE_MODAL:
            return{
                ...state, isOpen:false
            };
            default:
                return state
    }

};