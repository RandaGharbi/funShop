import React from 'react'
import { Card, Icon, Image, Input, Button } from 'semantic-ui-react'
import HelloCard from '../Card/HelloCard';
import FormRegister from '../Register/RegisterForm';
import { Link } from 'react-router-dom';
const Welcome = () => (
  <Card 
    style = {{position:'relative', left: '45rem', top: '19rem', width: '31rem', height: '32rem'}}
  >
  <Card.Content header='About Amy' />
  <Input 
      icon='user' 
      iconPosition='left' 
      placeholder='Login' 
      style = {{position:'relative', bottom:'7rem'}} 
  />
  <Input  
      type='password' 
      iconPosition='left' 
      placeholder='Password' 
      style = {{position:'relative', bottom:'5rem'}}
  />
  <div>
    <Button 
     style={{position: 'relative', left: '2rem', bottom: '3rem'}}>
      SignIn
    </Button>
  </div>
  <HelloCard />
  <Card.Content extra>
    <Link 
    to="/FormRegister"
      style={{position: 'relative', left: '23rem'}}>
      SignUp
    </Link>
  </Card.Content>
</Card>
)

export default Welcome;
