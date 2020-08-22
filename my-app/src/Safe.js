import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Menu,
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

const Safe = ({ setPageKey, ...props }) => {
 // useEffect(() => setPageKey('safe'))
  console.log(setPageKey)
 const [activeItem, setActiveItem] = useState('support')
  
  // state = { activeItem: 'home' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // const { activeItem } = this.state
  return (
    <Segment color='white'>
      <Menu pointing secondary>
        <Menu.Item
          name='Support Network'
          active={activeItem== 'support'}
          onClick={() =>setActiveItem('support')}
        />
        <Menu.Item
          name='Manage Accounts'
          active={activeItem == 'accounts'}
          onClick={() =>setActiveItem('accounts')}
        />
        <Menu.Item
          name='Connect With Help'
          active={activeItem == 'help'}
          onClick={() =>setActiveItem('help')}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='SWITCH BACK'
            active={activeItem == 'switch'}
            onClick={() =>setPageKey('default')}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        {activeItem =='support'? 
        <Header content = "support" />
        : activeItem =='accounts'? 
        <Header content = "accounts" />
        : activeItem =='help'? 
        <Header content = "help" />
        : null}
      </Segment>
    </Segment>
  )
}

export default Safe
