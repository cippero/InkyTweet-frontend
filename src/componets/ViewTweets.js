import React, { Component } from "react";
import {
    Modal,
    Row,
    Button,
    Col,
    Card
} from 'react-materialize';
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';

class ViewTweets extends Component {
    _mounted = false;
	constructor(props) {
		super(props);
		this.state = {
			tweets: []
            ,sub: true
		}
	}

	async componentDidMount() {
        this._mounted = true;
        const response = await fetch(`${SERVER_URL}/users/${this.props.userHandle}`);
        const json = await response.json();
        console.log({json: json});
        if (this._mounted && json.writtenTweets !== []) {
            await this.setState({
                tweets: json.writtenTweets
            });
            console.log(this.state.tweets);
        }
        if (this.props.user.subscriptions.indexOf(this.props.userHandle) !== -1) { this.setState({ sub: false })}
    }
    
    componentWillUnmount() {
        this._mounted = false;
    }

    handleSubscribe(e) {
        fetch(`${SERVER_URL}/users/${this.props.userHandle}`, {
            method: 'PUT',
            body: JSON.stringify({sub: this.state.sub, user: this.props.user}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            // console.log('Success:', response);
            this.props.updateUser();
        });
    }

    render() {
    	let allTweets = '';
        if (this.state.tweets !== []) {
            allTweets = this.state.tweets.map((tweet, i) => {
                return (
                    <Col key={i} s={6}>
                        <Card className='darken-1' textClassName='black-text' title={tweet.tweet_id}>
                        	{tweet.body}
                        </Card>
                    </Col>
                )
            })
        }
        const buttonStyle = { margin: '10px 10px 10px 0' };
        let subscribe = 'Subscribe';
        if (this.state.sub === false) { subscribe = 'Unsubscribe'; }
        return (
            <div>
                <Modal
                    header='InkyTweets'
                    trigger={<Button>View Tweets</Button>}>
                    <Row>
                        <button
                            className="btn btn-default"
                            style={buttonStyle}
                            onClick={(e) => this.handleSubscribe(e)}>{subscribe}</button>
                    </Row>
                    <Row>
                    	{allTweets}
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default ViewTweets;