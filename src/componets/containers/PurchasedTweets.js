import React, { Component } from "react";
import {
    Col,
    Card,
    CardTitle
} from 'react-materialize';
import axios from 'axios';
const SERVER_URL = 'http://localhost:8080';

class PurchasedTweets extends Component {
    constructor() {
        super()
        this.state = {
            purchasedTweets: []
        }
    }

    componentDidMount = () => {
        this.setState({purchasedTweets: this.props.user.purchasedTweets});
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({purchasedTweets: newProps.user.purchasedTweets})
    }

    handleTweetRemove = async (e, id) => {
        await axios.delete(`${SERVER_URL}/profile/${id}`, {data: {writer: this.props.user}})
        this.props.updateUser();
    }
    
    render() {
        const buttonStyle = {margin: '10px 10px 10px 0'};
        let purchasedTweets = <div>No purchased tweets</div>;
        let tags = '';
        let searchInput = new RegExp(this.props.query, 'i');
        if (this.props.user.purchasedTweets !== []) {
            purchasedTweets = this.props.user.purchasedTweets.map((tweet, i) => {
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
                                    id={i}
                                    className="btn btn-default"
                                    style={buttonStyle}
                                    onClick={(e) => this.handleTweetRemove(e)}>Remove</button>
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
                <Col s={4}>
                    {purchasedTweets}
                </Col>
            </div>
        );
    }
}

export default PurchasedTweets;