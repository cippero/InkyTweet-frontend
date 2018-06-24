import React, { Component } from "react";
// import { unmountComponentAtNode } from 'react-dom';
import { Col, Card, CardTitle } from 'react-materialize';
import axios from 'axios';
const SERVER_URL = 'http://localhost:8080';


class WrittenTweets extends Component {
    constructor() {
        super()
        this.state = {
            writtenTweets: []
        }
    }

    componentDidMount = () => { this.setState({writtenTweets: this.props.user.writtenTweets}); }

    componentWillReceiveProps = (newProps) => {
        this.setState({writtenTweets: newProps.user.writtenTweets});
        // console.log(this.props.query);
    }

    handleTweetRemove = async (e, id) => {
        await axios.delete(`${SERVER_URL}/profile/${id}`, {data: {writer: this.props.user}})
        this.props.updateUser();
    }

    render() {
        let style = {}
        this.writtenTweets === [] ? style = {backgroundColor: 'white'} : style = {backgroundColor: 'white'}
        const buttonStyle = {margin: '10px 10px 10px 0'};
        let writtenTweets = <div>No written tweets</div>;
        let tags = '';
        let searchInput = new RegExp(this.props.query, 'i');
        if (this.state.writtenTweets !== []) {
            writtenTweets = this.state.writtenTweets.map((tweet, i) => {
                tweet.categories === [] ? tags = '' : tags = tweet.categories.map((tag, i) => {return (<p key={i}> {tag} </p>)});
                if (this.props.query === '' || searchInput.test(tweet.body)) {
                    return (
                        <Card
                            key={i}
                            header={<CardTitle reveal waves='light' />}
                            title={tweet.body}
                            reveal={<div>{tags}</div>} >
                            <p>
                                <a href="/">By: {tweet.creator}</a>{' '}
                                <button
                                    data-id={tweet._id}
                                    className="btn btn-default"
                                    style={buttonStyle}
                                    onClick={(e) => this.handleTweetRemove(e, tweet._id)}>Remove</button>
                            </p>
                        </Card>
                    )
                } else {
                    return(<p key={i}></p>)
                }
            })
        }

        return (
            <div>
                <Col s={4} style={style}>
                    {writtenTweets}
                </Col>
            </div>
        );
    }
}

export default WrittenTweets;