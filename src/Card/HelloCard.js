import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import PostData from '../services/PostData';

class HelloCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type) { 
    localStorage.setItem('randa', res.accessToken);
    const a = localStorage.getItem('randa');
    let postData;
    if (type === 'facebook') {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.provider_pic,
      };

      this.setState({ token: localStorage.getItem('randa') });
      this.setState({ redirectToReferrer: true });
    }


    PostData('signup', postData).then((result) => {
      const responseJson = result;
      localStorage.setItem('randa', result.token);
      const auth = localStorage.getItem('randa');
      if (responseJson.userData) {
        localStorage.setItem('userData', JSON.stringify(responseJson));
        this.setState({ redirectToReferrer: true });
      }
    });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to="/Categories" />);
    }

    const responseFacebook = (response) => {
      this.signup(response, 'facebook');
    };
    return (
      <div className="App">
        <FacebookLogin
          appId="253063712096969"
          autoLoad
          fields="name,email,picture"
          callback={responseFacebook}
        />
    </div>
     
    );
  }
}

export default HelloCard;
