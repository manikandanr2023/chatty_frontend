import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { FaArrowRight } from 'react-icons/fa';
import './Register.scss';
const Register = () => {
  return (
    <div className="auth-inner">
      {/*
        <div className="alerts alert-success" role="alert">
        Error messages
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
            id="email"
            name="email"
            type="text"
            value="tester@test.com"
            labelText="Email"
            placeholder="Enter Email"
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
        </div>
        <Button label={'SIGNUP'} className="auth-button button" disabled={false} />
        <span className="forgot-password">
          Forgot Password? <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  );
};

export default Register;
