import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import {
  Feed,
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
import Img1 from './women1.png'
import Img2 from './women2.png'
import Img3 from './women3.png'

const Network = ({ ...props }) => {
    return (
    <Segment color='white' size='big'>
        <Feed>
            
            <Feed.Event>
            <Feed.Label image={Img1} />
            <Feed.Content date={'5 days ago'} 
            summary={'laura1983 created a post'} 
            extraText={"My husband used to give me $1500 a month but has recently started giving me $1000. What should I do?"} /> 
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' color='red' />271 Likes
            </Feed.Like>
            </Feed.Meta>        
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image={Img2} />
            <Feed.Content date={'3 days ago'} 
            summary={'jennyxoxo created a post'} 
            extraText={"People say that I should just leave him. If only it were that simple. He threatened me."} /> 
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' color='red' />144 Likes
            </Feed.Like>
            </Feed.Meta>        
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image={Img3} />
            <Feed.Content>
                <Feed.Date content={'1 day ago'} />
                <Feed.Summary content={'kate_sl created a post'} />
                <Feed.Extra text content={"How can I secure some funds for myself without my husband knowing?"} />
            </Feed.Content>
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' color='red' />79 Likes
            </Feed.Like>
            </Feed.Meta>
            </Feed.Event>

            <Button color='purple' circular icon='pencil alternate' />

        </Feed>
    </Segment>

    )


}

export default Network
