import React from 'react';
import '../index.css';
import '../style/modal.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import closeModal from '../actions/close.modal';


class ModalWindow extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            isOpen:false
        };
        this.onChangeClick = this.onChangeClick.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
    };   
    onChangeClick(){
        this.props.saveData(true);
        this.props.closeModal(closeModal());
    }

    onBtnClick(){
        return this.props.closeModal(closeModal());
    }
   
    render(){
        const {isOpen} = this.props.modal;
        if(!isOpen) return null;
        return (
            <div className='modal'>
                <h3>Вы действительно хотите внести изменения в свой профиль?</h3>
                <Link to = '/'><button className='ok' onClick={this.onChangeClick}>Да</button></Link>
                <button className='back' onClick={this.onBtnClick}>Нет</button>
            </div>
        );
    };
};
function mapStateToProps(state) {
    return {
        modal: state.modalReducer,
    };
};

export default connect(mapStateToProps)(ModalWindow);