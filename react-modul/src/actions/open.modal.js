export const OPEN_MODAL = 'Open Modal';

export default function openModal(isOpen){
    return{
        type:OPEN_MODAL,
        payload:isOpen
    }
};

