import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapsible,
    CollapsibleItem,
    Button
} from 'react-materialize';
import '../Home.css';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';


class LandingPage extends Component {
    render() {
        let button = '';
        if (this.props.user.handle === '') {
            button = <Button waves='light' node='a' href={SERVER_URL + '/auth/login'}>Login With Twitter</Button>
        } else {
            button = <Button waves='light' node='a' href={`/user/${this.props.user.handle}`}>Profile</Button>
        }
        return (
            <div>
                <div className='container'>
                    <div className='left'>
                        <Link to='/'><h1>InkyTweet</h1></Link>
                    <Collapsible accordion>
                        <CollapsibleItem header='Get paid to write' >
                            increase your repuation to get more money
                    </CollapsibleItem>
                        <CollapsibleItem header='get rewarded for your creativity' >
                            Share your ideas without a large following
                    </CollapsibleItem>
                    </Collapsible>
                    </div>
                    <hr />
                    <div className='right'>
                        {button}
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;