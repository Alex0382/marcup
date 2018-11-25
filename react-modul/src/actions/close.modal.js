export const CLOSE_MODAL = 'Close Modal';

export default function closeModal(isOpen){
    return{
        type:CLOSE_MODAL,
        payload:isOpen
    }
};