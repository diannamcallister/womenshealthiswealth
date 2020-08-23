import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'semantic-ui-css/semantic.min.css'
import {
  Feed,
  Button,
  List,
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


const GetHelp = ({props }) => {
    return (


        <Segment color='olive' fluid='true'>
            <Button circular content='Get Help!' size='massive' color='red' fluid='true' />

            <p>
            As soon as you click the get help button, local authorities will be contacted. Once clicked, 
            there is no way to stop the alert. Please be adviced that inapproprate use of this button will
            result in legal action being taken. 



            <List ordered divided verticalAlign='middle' floated='middle'>
            <List.Header as='a'>Other ways to get help:</List.Header>
                <List.Item>https://www.sheltersafe.ca/ : Find a safe shelter in your province</List.Item>
                <List.Item>http://54.186.211.6/shelters/ : Shelters for Aboriginals</List.Item>
                <List.Item>https://canadianwomen.org/support-services/: Services for Canadian Women</List.Item>
                <List.Item>The National Residential School Crisis Line: 1 866 925 4419</List.Item>
                <List.Item>Kids Help Phone: 1 800 668 6868</List.Item>
                <List.Item>https://www.ontario.ca/page/get-help-if-you-are-experiencing-violence#section-0: Ontario Crisis Lines</List.Item>
                <List.Item>https://settlement.org/ontario/health/family-health/domestic-abuse/what-is-domestic-abuse/: What is Domestic abuse?</List.Item>
                <List.Item>The National Residential School Crisis Line: 1 866 925 4419</List.Item>
                <List.Item>Kids Help Phone: 1 800 668 6868</List.Item>
            </List>
            </p>

            
        </Segment>

    )

}

export default GetHelp


