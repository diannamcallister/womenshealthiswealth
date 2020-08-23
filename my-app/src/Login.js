import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import { useFormik } from 'formik'
import {
  Button,
  Form,
  Grid,
  Header,
  Transition,
  Icon,
  Message,
  Container,
  Segment
} from 'semantic-ui-react'
import './App.css'
import * as R from 'ramda'

const Login = ({ setPageKey, ...props }) => {
    useEffect(() => setPageKey('login'))
    console.log(setPageKey)
    //define function
    const formik = useFormik({
      initialValues: {
        username: '',
        password:'',
      },
      onSubmit: (values,) => {
       //values.username is the username, values.password is the password
       //so if the username and password match a user & its the secure pass set
       //secureLogin = true and defaultLogin= false
       //else if they didn't enter the secure pass set secureLogin = false and defaultLogin= true
      
      axios.get(`http://localhost:8010/api/users/${values.username}/${values.password}`)
      .then(res => {
        console.log("User Logged In");
        var secureLogin = false;
        var defaultLogin = false;
        if (res.data.message.includes("secure")) {
          // the user entered their secure password, so it is safe to display the secure page
          secureLogin = true;
          defaultLogin = false;
        } else if (res.data.message.includes("general")){
          secureLogin = false;
          defaultLogin = true;
        } else {
          secureLogin = false;
          defaultLogin = false;
        }
          secureLogin?
           setPageKey('safe') : 
           defaultLogin? setPageKey('default') : setPageKey('login')
      })
      .catch(error => {
        console.log("Error occurred when trying to log in!");
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
          <Icon name="woman" /> Log in to access Women's Health is Wealth!
        </Header>
        </Segment>
        <Form onSubmit={formik.handleSubmit}>
          <Segment raised attached="top">
            <Form.Input
               type="text"
               name="username"
               fluid
               icon="user"
               iconPosition="left"
                placeholder="USERNAME"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            <Form.Input
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="PASSWORD"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Button animated
              fluid
              type='submit'
              size="large"
              style={{ background: '#ffd1dc', color: '#ffff' }}
              >
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
            content="New to us?"
            onClick={() => setPageKey('register')}
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

export default Login
