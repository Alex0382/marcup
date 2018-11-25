import React from 'react';
import '../index.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import userAction from '../actions/user.action'
import openModal from '../actions/open.modal'
import ChangeForm from './change.form';

class ChangeSettings extends React.Component {
   
    render(){
        return (
            <div className='main'>
            <div className='logo'><h1>The journey of your dreams</h1></div>
            <div className = 'user'>
            <h2>Измените информацию о себе</h2>
            <ChangeForm changeSetting={this.props.changeSetting} openModal={this.props.openModal}/>
            </div>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        name: state.userReducer.user.name,
        surname: state.userReducer.user.surname
    };
};
function mapDispatchToProps(dispatch) {
    return {
        changeSetting: bindActionCreators(userAction, dispatch),
        openModal: bindActionCreators(openModal, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ChangeSettings);