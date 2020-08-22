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


const DefaultHomecare = ({ ...props }) => {
    return (
        <Segment color='white'>
            <Item.Group>
                <Item>
                <Item.Image size='tiny' src={require('./removestains.jpg')} />

                <Item.Content>
                    <Item.Header as='a'>Removing carpet stains</Item.Header>
                    <Item.Meta>Sad but true: Coffee stains, wine spills, and muddy footprints are simply a part of life. Sure, there are ways you can try your best to prevent the mess in the first place — asking guests to take their shoes off or buying a stain-resistant carpet, for example — but your best bet is knowing how to get rid of them before they happen.

While vacuuming on a regular basis will keep your carpet from looking dingy and dirty, tough stains are something that even the best vacuum can't handle. Whatever the problem, there's a specific solution or cleaning product to make your area look brand-new (or at the very least, clean) again. Here, Carolyn Forte, director of the Good Housekeeping Institute Cleaning Lab, shares how to clean carpet from all-too-common stains, including red wine spills, caked-on dirt, and pet messes.
                    </Item.Meta>
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')}  />
                    </Item.Description>
                    <Item.Extra>https://www.goodhousekeeping.com/home/cleaning/a47654/how-to-clean-carpet/</Item.Extra>
                </Item.Content>
                </Item>

                <Item>
                <Item.Image size='tiny' src={require('./DIYfresh.jpg')} />

                <Item.Content>
                    <Item.Header as='a'>DIY Air Freshener</Item.Header>
                    <List>
                    <List.Item>  Citrus Mint Air Freshener Spray </List.Item>
                        <List.Item> You can’t beat the combination of citrus and mint to give your home a crisp, invigorating feel. </List.Item>
                        <List.Item> 3/4 cup water </List.Item>
                        <List.Item> 2 tablespoons vodka, rubbing alcohol, or real vanilla extract </List.Item>
                        <List.Item> 10 drops wild orange essential oil </List.Item>
                        <List.Item> 8 drops peppermint essential oil </List.Item>
                    </List>
                  
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')} />
                    </Item.Description>
                    <Item.Extra>https://www.theprairiehomestead.com/2013/06/homemade-air-fresheners.html</Item.Extra>
                </Item.Content>
                </Item>
            </Item.Group>

            <Button circular icon='pencil alternate' />
        </Segment>
    )
    

}

export default DefaultHomecare