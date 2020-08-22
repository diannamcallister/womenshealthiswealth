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

const Default = ({ setPageKey, ...props }) => {
 // useEffect(() => setPageKey('safe'))
  console.log(setPageKey)
 const [activeItem, setActiveItem] = useState('home')
  
  // state = { activeItem: 'home' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // const { activeItem } = this.state
  return (
    <Segment color='white'>
      <Menu pointing secondary>
        <Menu.Item
          name='Home'
          active={activeItem== 'home'}
          onClick={() =>setActiveItem('home')}
        />
        <Menu.Item
          name='Recipes'
          active={activeItem == 'recipes'}
          onClick={() =>setActiveItem('recipes')}
        />
        <Menu.Item
          name='Homecare'
          active={activeItem == 'homecare'}
          onClick={() =>setActiveItem('homecare')}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            active={activeItem == 'logout'}
            onClick={() =>setPageKey('login')}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        {activeItem =='home'? 
        <Header content = "Women's Health!" />
        : activeItem =='recipes'? 
        <Header content = "Latest recipes" />
        : activeItem =='homecare'? 
        <Header content = "Homecare tips" />
        : null}
      </Segment>
    </Segment>
  )
}

export default Default
