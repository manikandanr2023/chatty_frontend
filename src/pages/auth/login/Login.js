import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
const Login = () => {
  return (
    <div className="auth-inner">
      {/*
        <div className="alerts alert-success" role="alert">
        Error message
      </div>
      */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="this is it"
            labelText="Username"
            placeholder="Enter user name"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter Password"
            handleChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" value={false} handleChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        <Button label={'LOGIN'} className="auth-button button" disabled={false} />

        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot Password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
