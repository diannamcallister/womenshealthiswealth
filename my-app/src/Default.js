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
import DefaultHome from './DefaultHome'
import DefaultRecipes from './DefaultRecipes'
import DefaultHomecare from './DefaultHomecare'

const Default = ({ setPageKey, ...props }) => {
 // useEffect(() => setPageKey('safe'))
  console.log(setPageKey)
 const [activeItem, setActiveItem] = useState('home')
  
  // state = { activeItem: 'home' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  // const { activeItem } = this.state
  return (
    <>
    <Segment color='white'>
    <Header icon style={{ color: '#ffd1dc' }} as="h1" textAlign='center'>
    <Icon name='woman' />
    Women's Health is Wealth
    <Header.Subheader color='olive'>
      Learn more about women's health, try new recipes and get homecare tips.
    </Header.Subheader>
    </Header>
      <Menu pointing secondary>
        <Menu.Item
          name='Healthcare'
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
            color='pink'
            name='LOGOUT'
            onClick={() =>setPageKey('login')}
          >
             <Button color='olive' >LOG OUT</Button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Segment>
      <>
        {activeItem =='home'? 
        <DefaultHome/>
        : activeItem =='recipes'? 
        <DefaultRecipes />
        : activeItem =='homecare'? 
        <DefaultHomecare />
        : null}
    </>
    </>
  )
}

export default Default
