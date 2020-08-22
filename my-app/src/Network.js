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

const Network = ({ setPageKey, ...props }) => {
    return (
    <Segment color='white' size='big'>
        <Feed>
            <Feed.Event
            image={Img1}
            date={'5 days ago'}
            summary={'Laura Faucet created a post'}
            extraText={"My husband used to give me $1500 a month but has recently started giving me $1000. I'm afraid he's gambling again. What should I do?"}
            />
            <Feed.Event>

            <Feed.Label image={Img2} />
            <Feed.Content date={'3 days ago'} summary={'Jenny Lang created a post'} extraText={"People say that I should just leave him. If only it were that simple."} />
            </Feed.Event>

            <Feed.Event>
            <Feed.Label image={Img3} />
            <Feed.Content>
                <Feed.Date content={'1 day ago'} />
                <Feed.Summary content={'Kate Smith created a post'} />
                <Feed.Extra text content={"How can I secure some funds for myself without my husband knowing?"} />
            </Feed.Content>
            </Feed.Event>

            <Button circular icon='pencil alternate' />
        </Feed>
    </Segment>

    )


}

export default Network
