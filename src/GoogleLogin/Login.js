import React from 'react';
import { GoogleLogout, GoogleLogin  } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends React.Component{
  render(){
    return(
      <GoogleLogin
      clientId="376017494746-eugi6k3bbft2rnij5mv26of30iob33c0.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
    );
    <GoogleLogout
    buttonText="Logout"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>
  }
}

export default Login;