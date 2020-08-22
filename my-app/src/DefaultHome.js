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
  Header,
  Transition,
  Icon,
  Message,
  Container,
  Segment
} from 'semantic-ui-react'
import './App.css'
import * as R from 'ramda'


const DefaultHome = ({ ...props }) => {
    return (
        <Segment color='white'>
            <Item.Group>
                <Item>
                <Item.Image size='tiny' src={require('./menstruation.png')} />

                <Item.Content>
                    <Item.Header as='a'>Menstruation</Item.Header>
                    <Item.Meta>Your menstrual cycle helps your body prepare for pregnancy every 
                    month. It also makes you have a period if you’re not pregnant. Your menstrual 
                    cycle and period are controlled by hormones like estrogen and progesterone. 
                    Here’s how it all goes down: You have 2 ovaries, and each one holds a bunch 
                    of eggs. The eggs are super tiny — too small to see with the naked eye. 
                    During your menstrual cycle, hormones make the eggs in your ovaries mature 
                    — when an egg is mature, that means it’s ready to be fertilized by a sperm
                    cell. These hormones also make the lining of your uterus thick and spongy.
                    So if your egg does get fertilized, it has a nice cushy place to land 
                    and start a pregnancy. This lining is made of tissue and blood, like 
                    almost everything else inside our bodies. It has lots of nutrients to 
                    help a pregnancy grow.
                    </Item.Meta>
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')}  />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
                </Item>

                <Item>
                <Item.Image size='tiny' src={require('./personicon.jpg')} />

                <Item.Content>
                    <Item.Header as='a'>Menstruation</Item.Header>
                    <Item.Meta>Health Tip #1: Eat a healthy diet. “You want to eat as close
                        to a natural foods diet as you can,” says Donald Novey, MD, an 
                        integrative medicine physician with the Advocate Medical Group in 
                        Park Ridge, Ill. That means a variety of fresh fruits and vegetables
                        and fewer processed foods. Eat whole grains and high-fiber foods 
                        and choose leaner cuts of meat, fish, and poultry. Include low-fat
                        dairy products in your diet as well — depending on your age, you 
                        need between 800 and 1,500 milligrams of calcium daily to help 
                        avoid osteoporosis, Dr. Novey says. Avoid foods and beverages 
                        that are high in calories, sugar, salt, and fat.
                    </Item.Meta>
                    <Item.Description>
                    <Image src={require('./short-paragraph.png')} />
                    </Item.Description>
                    <Item.Extra>https://www.everydayhealth.com/healthy-living/everyday-tips.aspx</Item.Extra>
                </Item.Content>
                </Item>
            </Item.Group>

            <Button circular icon='pencil alternate' />
        </Segment>
    )
    

}

export default DefaultHome