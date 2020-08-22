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
  List,
  Modal,
  Image,
  Container,
  Card,
  Segment
} from 'semantic-ui-react'
import './App.css'
import * as R from 'ramda'

const Accounts = ({ ...props }) => {
    const src= require('./financechart.png')
    const [activeItem, setActiveItem] = useState('microloans')
    const ModalContent =()=>(
        <Header>
            <Header.Subheader content="Savings"/>
            <Form.Input/>
            <Header.Subheader content="Gas"/>
            <Form.Input/>
            <Header.Subheader content="Insurance"/>
            <Form.Input/>
            <Header.Subheader content="Entertainment"/>
            <Form.Input/>
            <Header.Subheader content="Car"/>
            <Form.Input/>
            <Header.Subheader content="Food"/>
            <Form.Input/>
            <Header.Subheader content="Housing"/>
            <Form.Input/>
        </Header>
    )
  return (
    <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Segment color='olive' >
        <Header as='h2' content='Finance breakdown'>
        <Header.Subheader>
        Visually explore the breakdown of your finances.
        </Header.Subheader>
        </Header>
        </Segment>
        <Image src={src}/>
      </Grid.Column>
      <Grid.Column width={8}>
      <Segment color='olive' >
      <Header as='h2' content='Finance breakdown'>
        <Header.Subheader>
        Learn more about how to manage your finances and build back your credit score
        </Header.Subheader>
        </Header>
        <Menu pointing secondary>
        <Menu.Item
          name='Microloans'
          active={activeItem == 'microloans'}
          onClick={() =>setActiveItem('microloans')}
        />
        <Menu.Item
          name='Building up credit'
          active={activeItem == 'credit'}
          onClick={() =>setActiveItem('credit')}
        />
        <Menu.Item
          name='Free daycare near you'
          active={activeItem == 'daycare'}
          onClick={() =>setActiveItem('daycare')}
        />
        <Menu.Item
        name='Supermarket coupons'
        active={activeItem == 'coupons'}
        onClick={() =>setActiveItem('coupons')}
      />
      </Menu>
      <>
        {activeItem =='credit'? 
        <Header content = "credit" >
             <List>
                <List.Item>1. Pay Your Bills on Time </List.Item>
                <List.Item>2. Get Credit for Making Utility and Cell Phone Payments on Time</List.Item>
                <List.Item>3. Pay off Debt and Keep Balances Low on Credit Cards and Other Revolving Credit</List.Item>
                <List.Item>4. Apply for and Open New Credit Accounts Only as Needed</List.Item>
                <List.Item>5. Don't Close Unused Credit Cards </List.Item>
                <List.Item>6. Don't Apply for Too Much New Credit, Resulting in Multiple Inquiries</List.Item>
                <List.Item>7. Dispute Any Inaccuracies on Your Credit Reports </List.Item>
            </List>
            <Header.Subheader content ='https://www.experian.com/blogs/ask-experian/credit-education/improving-credit/improve-credit-score/'/>
        </Header>
        :  activeItem == 'microloans'? 
        <Header content = "What are Microloans?" >
            <Header.Subheader>
            Microlending has been facilitated by the rise of the internet and the worldwide interconnectivity that it brings. People who wish to put their savings to use by lending and those who seek to borrow can find each other online and transact.


The credit rating of borrowers is imputed using data (including whether or not the borrower owns a home), a credit check or background check, and repayment history if the borrower has participated in microloans in the past. Even those with excellent credit scores can expect to pay slightly more than traditional credit. As a result, lenders may earn a better return than through traditional savings or CDs.

Because these loans are not typically backed by any sort of collateral, if a borrower defaults, the lender may expect little or nothing to be recovered. On Prosper.com, the best-rated borrower can expect to pay a minimum of 6% annually on a loan, and the riskiest borrower will pay an interest rate of up to 31.9%. 3﻿If an investor thinks that 6% for a relatively safe loan is worth the risk, the loan may produce outsized returns compared to other forms of lending. 

Because of the inherent risk of any single microloan, lenders often invest only a small amount per loan but may fund a portfolio of many dozens of microloans. Therefore, any individual borrower may find their loan is funded by a large number of lenders, each contributing a small percentage of the total amount. By spreading the risk across a wide array of loans with different credit qualities and other attributes, lenders can ensure that even if one or two loans default, their portfolios will not be wiped out.

Lenders of microloans are typically individuals, as professional investors and financial institutions find the risks far outweigh the reward. As a result, most microloans are peer to peer in the purest sense.
https://www.investopedia.com/articles/personal-finance/040715/what-microlending-and-how-does-it-work.asp
            </Header.Subheader>
        </Header>
        : activeItem =='daycare'? 
        <Header content = "Toronto Daycare" >
            <List>
                <List.Item>Toronto Daycare </List.Item>
                </List>
            <Header.Subheader>
            You can apply online for a Child Care Fee Subsidy or you can call 311. 

Important: You cannot use the online application to re-apply, change your address, phone number, child care choices or to add a new child to your application, please call 416-338-8888 to make any of these changes.

To apply, you will need

proof of income: 
you will need your Canada Revenue Agency, Notice of Assessment (NOA) Opens in new window or Notice of Reassessment. To replace a NOA call 1-800-959-8281.
Ontario Disability Support Program (ODSP) Statement (if applicable)
Note: If you receive Ontario Works, contact your Ontario Works caseworker to apply for a child care fee subsidy.
your child care choices:
you will need the names of the child care programs you are interested in.
Parents should phone and visit each child care program to make sure it meets your family’s needs.
Our licensed child care page can help you find a program.
https://www.toronto.ca/community-people/employment-social-support/child-family-support/child-care-support/
            </Header.Subheader>
        </Header>
        : activeItem =='coupons'? 
        <Header content = "coupons" >
            <List>
                <List.Item> Grocery Coupons available near you </List.Item>
                </List>
            <Header.Subheader>
            <Button fluid color='teal' content="CLICK TO ACCESS 10% OFF MEAT IN GROCERY STORE SAVINGS"/>
            <Button fluid color='pink' content="CLICK TO ACCESS BUY ONE CEREAL GET ONE FREE IN GROCERY STORE"/>
            <Button fluid color='purple' content="CLICK TO ACCESS 30% OFF BEANS IN GROCERY STORE"/>
            </Header.Subheader>
        </Header>
        : null}
      </>
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
    <Grid.Column width={8}>
      <Segment inverted color='olive' >
      <Header.Subheader>
            <Modal
            trigger={<Button fluid color='purple'>UPDATE FINANCE BREAKDOWN</Button>}
            header='Update your finance breakdowns'
            content={<ModalContent/>}
            actions={['Update', { key: 'done', content: 'Cancel', positive: true }]}
            />
            </Header.Subheader>
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
      <Segment inverted color='olive' >
      <Header.Subheader>
            <Button fluid color='teal' content="CONNECT WITH A BANK"/>
            NOTE: This will open an incognito tab, untracked by browser history. Make sure you are in a safe space to do this.
            </Header.Subheader>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
}

export default Accounts
