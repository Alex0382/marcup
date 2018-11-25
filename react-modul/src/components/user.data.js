import React from 'react';
import '../style/user.data.css';
import '../index.css';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import userAction from '../actions/user.action';


class UserData extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            date:this.props.date,
            age:'',
            today:new Date()
        };
        this.age();

    }
    age(){
        let dateBirth = this.state.date.split('-');
        let year = this.state.today.getFullYear();
        let month = this.state.today.getMonth()+1;
        let day = this.state.today.getDate();
        
        if(dateBirth[2]>day){
            month=month-1};
        if(dateBirth[1]>month){
        year=year-1};
        this.state.age = year-dateBirth[0];   
    }
    render(){
        return (
            <div>
                <div className='logo'><h1>The journey of your dreams</h1></div>
                <button className='link'>Главная страница</button>
                <Link to = '/change'><button className='link'>Изменить профиль</button></Link>
                <div className = 'userData'>
                    <h2>Мой профиль</h2>
                    <div className='avatar'><img src={this.props.avatar} alt='Аватар'/></div>
                    <div className='info'>
                    <span>Имя:</span><p>{this.props.name}</p>
                    <span>Фамилия:</span><p>{this.props.surname}</p>
                    <span>E-mail:</span><p>{this.props.email}</p>
                    <span>Дата рождения:</span><p>{this.props.date}</p>
                    <span>Возраст:</span><p>{this.state.age} лет</p>
                    </div>
                    
                </div>
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
        date: state.userReducer.user.date 
    };
    
};
function mapDispatchToProps(dispatch) {
    return {
        changeSetting: bindActionCreators(userAction, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserData);