import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './componets/LandingPage';
import Header from './componets/partials/Header';
import Profile from './componets/Profile';
import Browse from './componets/Browse';
import './App.css';
// import Header from './componets/partials/Header';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        twitterId: ''
        , handle: ''
        , pic: ''
        , reputation: 0
        , purchasedTweets: []
        , writtenTweets: []
        , subscriptions: []
        , followers: []
      },
      query: ''
    };
  }

  updateUser = () => {
    // console.log('update user');
    // OAuth: Added function for Twitter users
    fetch(SERVER_URL + '/auth/user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      }
    })
      .then(response => response.json())
      .then(response => {
        if (!!response.user) {
          // We found a twitter user in the server session
          // console.log('user found. response:', response);
          let twitterUser = {
            twitterId: response.user.twitterId
            , handle: response.user.handle
            , pic: response.user.pic
            , reputation: response.user.reputation
            , purchasedTweets: response.purchasedTweets
            , subscriptions: response.user.subscriptions
            , writtenTweets: response.writtenTweets
            , followers: response.followers
          }
          this.setState({ user: twitterUser });
        }
      });
  }

  filter = (input) => { this.setState({ query: input }); }

  componentDidMount() { this.updateUser(); }

  render() {
    return (
      <div>
        <Header
          user={this.state.user}
          filter ={this.filter} 
          />
        <Switch>
          <Route exact path='/' component={() => <LandingPage user={this.state.user} />} />
          <Route path={`/user/${this.state.user.handle}`} component={() => <Profile
            user={this.state.user}
            updateUser={this.updateUser}
            query={this.state.query} 
            />} />
          <Route path='/browse' component={() => <Browse
            user={this.state.user}
            updateUser={this.updateUser}
            query={this.state.query} 
            />} />
        </Switch>
      </div>
    );
  }
}

export default App;
