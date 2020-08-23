import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import {
  Button,
  Form,
  Grid,
  Header,
  Transition,
  Icon,
  Message,
  Container,
  Checkbox,
  Segment
} from 'semantic-ui-react'
import './App.css'
import * as R from 'ramda'
import { useFormik } from 'formik'

const Register = ({ setPageKey, ...props }) => {
console.log(setPageKey)
const [check, updateCheck] = useState(false)
const [email, setEmail] = useState('')
const [securePassword, setSecurePassword] = useState('')
  const formik = useFormik({
    initialValues: {
      username: '',
      password:'',
      passwordConfirm:'',
      email:'',
      securePassword:'',
    },
    onSubmit: (values,) => {
     //values.username is the username, values.password is the password
     //values.confirmPassword is the re-entered password (make sure values.password
     //and values.passWord confirm match before creating user!!)
     //and values.email is their email, NO NEED TO STORE IT
     // and values.securePassword is their securePassword
     //the variable 'check' means they opted in for a securePassword so itll automatically
     //route to the safe route

     const user = {
      username: values.username,
      password: values.password,
      secure_password: values.secure_password
    };
    
    axios.post('http://localhost:8010/api/users/', user)
    .then(res => {
      console.log("User Created");
      if (user.secure_password) {
        // the user entered their secure password, so it is safe to display the secure page
        const secureLogin=true;
        const defaultLogin = false;
      } else {
        const secureLogin=false;
        const defaultLogin = false;
      }
      check?
         setPageKey('safe') : setPageKey('default')
    })
    .catch(error => {
      console.log("Error occurred when trying to create user!");
      console.log(error);
    });
    },
  });
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Transition
      animation="horizontal flip"
      duration={1000}
      unmountOnHide={true}
      transitionOnMount={true}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment raised color="white">
        <Header style={{ color: '#ffd1dc' }} as="h1" textAlign="center">
          <Icon name="woman" /> Register an account with Women's Health is Wealth
          <Header.Subheader content="Join a community of women dedicated to their health!"/>
        </Header>
        </Segment>
        <Form onSubmit={formik.handleSubmit}
          size="large"
        >
          <Segment raised attached="top">
            <Form.Input
                type="text"
                name="username"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="CREATE A USERNAME"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <Form.Input
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="ENTER A PASSWORD"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Form.Input
              name="passwordConfirm"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="RE ENTER YOUR PASSWORD"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
             <Checkbox label='I would LOVE to opt-in for three Positive Affirmation emails a day!' 
             checked={check} onChange={()=> check ? updateCheck(false) : updateCheck(true)}/>
             {check ? 
             <>
             <Form.Input
              name="email"
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="ENTER YOUR EMAIL"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.email}
            /> 
            <Form.Input
            name="securePassword"
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="ENTER YOUR EMAIL'S SECURE PASSWORD"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.securePassword}
          />
             </>
            : null}
            <Button animated
              type="submit"
              fluid
              size="large"
              style={{ background: '#ffd1dc', color: '#ffff' }} >
              <Button.Content visible> Log in </Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Segment>
        </Form>
        <Segment raised attached="bottom">
          <Button
            fluid
            basic
            style={{ background: '#ffd1dc', color: '#ffff' }}
            content="Already have an account?"
            onClick={() => setPageKey('login')}
          />
        </Segment>
        {/* {R.prop('called', result) && R.prop('error', result) && (
          <Message negative>
            The username or password you have entered is invalid.
          </Message>
        )} */}
      </Grid.Column>
    </Transition>
  </Grid>
  )
}

export default Register;
