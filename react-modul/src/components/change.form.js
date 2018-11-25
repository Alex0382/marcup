import React from 'react';
import '../index.css';
import '../style/form.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import ModalWindow from './modal.window';
import {bindActionCreators} from "redux";
import closeModal from '../actions/close.modal';
import openModal from '../actions/open.modal';
import is from 'is_js';


class ChangeForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            avatar:'',
            name:this.props.name,
            surname:this.props.surname,
            email:this.props.email,
            date:this.props.date,
            
            errorName:'',
            errorEmail:''

        };
        this.save = this.save.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.avatarHandler = this.avatarHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.surnameHandler = this.surnameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.submit = this.submit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.isNameValid = this.isNameValid.bind(this);
        this.isEmailValid = this.isEmailValid.bind(this);
       
    };
    
    onBtnClick(){
        if(!this.isFormValid()) 
             return;
        else
        return this.props.openModal(openModal());
        
    }
    save(){
         this.props.changeSetting(this.state);    
    }
    
    submit(evt) {
        evt.preventDefault();
         return this.setState(
            this.state
         );
         
    }
    avatarHandler(evt) {
        return this.setState({
            avatar: evt.target.value,
        });
    }
    nameHandler(evt) {
        return this.setState({
            name: evt.target.value,
        });
    }
    surnameHandler(evt) {
        return this.setState({
            surname: evt.target.value,
        });
    }
    emailHandler(evt) {
        return this.setState({
            email: evt.target.value,
        });
    }
    dateHandler(evt) {
        return this.setState({
            date: evt.target.value,
        });
    }
    
    isFormValid(){
        return this.isNameValid(this.state.name) && this.isEmailValid(this.state.email);
    }
    isNameValid(name){
        let errorName = "";
        if(name==="") {
            errorName = "Поле обязательно к заполнению";
            this.setState({errorName});
            return false;
        }
        this.setState({errorName});
        return true;
    }
    isEmailValid(email){
        let errorEmail = "";
        if(email==="") {
            errorEmail = "Поле обязательно к заполнению";
            this.setState({errorEmail});
            return false;
        }
        if(!is.email(email)){
            errorEmail = "В поле необходимо ввести валидный email";
            this.setState({errorEmail});
            return false;
        }
        this.setState({errorEmail});
            return true;
    }
    render(){
        
        return (
            <div className='change'>
            <div className='ava'><img src={this.props.avatar} alt='Аватар'/></div>
            <form className='form' onSubmit={this.submit}>
            
            <div>
                <label><input className='foto' type ='file' value={this.state.avatar} onChange={this.avatarHandler}
                name = {this.props.avatar}>
                </input></label><span className='text'>:Аватар (добавить/изменить)</span>
                <br/>
                <span className='error'></span>
                <br/>
                <label><input type ='text' value={this.state.name} onChange={this.nameHandler}
                name = {this.props.name} error ={this.state.errorName}>
                </input></label><span className='text'>:Имя (добавить/изменить)</span>
                <br/>
                <span className='error'>{this.state.errorName}</span>
                <br/>
                <label><input type ='text' value={this.state.surname} onChange={this.surnameHandler}
                name = {this.props.surname}>
                </input></label><span className='text'>:Фамилия (добавить/изменить)</span>
                <br/>
                <span className='error'/>
                <br/>
                <label><input type ='email' value={this.state.email} onChange={this.emailHandler}
                name = {this.props.email} error ={this.state.errorEmail}>
                </input></label><span className='text'>:E-mail (добавить/изменить)</span>
                <br/>
                <span className='error'>{this.state.errorEmail}</span>
                <br/>
                <label><input type ='date' value={this.state.date} onChange={this.dateHandler}
                name = {this.props.date}>
                </input></label><span className='text'>:Дата рождения (добавить/изменить)</span>
                <br/>
                <span className='error'/>
                <br/>
                </div>
            </form>
           
           <button className='yes' type = 'submit' onClick={this.onBtnClick}>Изменить</button>
            <Link to = '/'><button className='no'>Назад</button></Link>
            <ModalWindow closeModal={this.props.closeModal} 
            saveData={this.save}/>
            </div>

        );

    };
};
function mapStateToProps(state) {
    return {
        avatar: state.userReducer.user.avatar,
        name: state.userReducer.user.name,
        surname: state.userReducer.user.surname,
        email: state.userReducer.user.email,
        date: state.userReducer.user.date,
    };
    
};
function mapDispatchToProps(dispatch) {
    return {
        closeModal: bindActionCreators(closeModal, dispatch),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChangeForm);