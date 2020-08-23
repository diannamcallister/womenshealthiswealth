import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Image,
  Item,
  Menu,
  Form,
  Grid,
  List,
  Header,
  Transition,
  Icon,
  Message,
  Container,
  Segment
} from 'semantic-ui-react'
import './App.css'
import * as R from 'ramda'


const DefaultRecipes = ({ ...props }) => {
    return (
        <Segment color='white'>
            <Item.Group>
                <Item>
                <Item.Image size='tiny' src={require('./homemadegranola.jpg')} />

                <Item.Content>
                    <Item.Header as='a'>Banana Granola</Item.Header>
                    <List>
                        <List.Item> 1 ripe banana </List.Item>
                        <List.Item> 3/4 cup water </List.Item>
                        <List.Item> 3 tablespoons honey </List.Item>
                        <List.Item> 1/8 tsp cardamom </List.Item>
                        <List.Item> 2 tsp cinnamon </List.Item>
                        <List.Item> 2 cups rolled oats </List.Item>
                    </List>
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')}  />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
                </Item>

                <Item>
                <Item.Image size='tiny' src={require('./plantbowl.jpg')} />

                <Item.Content>
                    <Item.Header as='a'>Budda Bowl</Item.Header>
                    <List>
                        <List.Item> 1/2 Butternut squash cubed and roasted </List.Item>
                        <List.Item> 1 can chickpeas drained </List.Item>
                        <List.Item> 2 tsp red chili flakes </List.Item>
                        <List.Item> 1 medium avocado </List.Item>
                        <List.Item> 1 large tomato </List.Item>
                        <List.Item> 4 small radishes </List.Item>
                    </List>
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')} />
                    </Item.Description>
                </Item.Content>
                </Item>
            </Item.Group>

            <Button color='purple' circular icon='pencil alternate' />
        </Segment>
    )
    

}

export default DefaultRecipes