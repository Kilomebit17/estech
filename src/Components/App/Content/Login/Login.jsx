import React from "react";
import css from "./Login.module.css";
import {reduxForm,Field} from 'redux-form'
import { compose } from "redux";
import { connect } from "react-redux";
import {getLoginDataThunkCreator} from '../../../../Redux/authReducer'
import {requiredField} from "../../../../utils/validations/formValidator";
import {Input} from "../../../common/FromsControl/FormsControl";
const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="login"  name={'login'} component={Input}  validate={requiredField}/>
        </div>
        <div>
          <Field placeholder="password" name={'password'} component={Input} validate={requiredField}/>
        </div>
        <div>
          <Field type="checkbox" name={'rememberMe'} component={'input'}/>
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
    </>
  );
};
const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);
const Login = (props) => {
  const onSubmit = (dataForm) => {
    console.log(dataForm);
    // props.getLoginDataThunkCreator(dataForm)
  };
  return (
    <div className={css.login}>
      <h1>Login menu</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = state => {}
export default compose(
  connect(mapStateToProps,{})
)(Login);
