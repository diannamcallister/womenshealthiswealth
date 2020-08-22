import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
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
        <Form
          onSubmit={(values, data) => {
           // handleSubmit(values, data) && setPageKey('main')
          }}
          size="large"
        >
          <Segment raised attached="top">
            <Form.Input
              // type="text"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.username}
              // name="username"
              // fluid
              // icon="user"
              // iconPosition="left"
              // placeholder="USERNAME"
              // error={invalidUsername}
              // label={invalidUsername ? isError('username') : null}
            />
            <Form.Input
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.password}
              // name="password"
              // fluid
              // icon="lock"
              // iconPosition="left"
              // placeholder="PASSWORD"
              // type="password"
              // error={invalidPassword}
              // label={invalidUsername ? isError('password') : null}
            />
            <Button animated
              type="submit"
              fluid
              size="large"
              style={{ background: '#ffd1dc', color: '#ffff' }}
              onClick={() => setPageKey('safe')} >
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
           // onClick={() => setPageKey('register')}
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

export default Login;
