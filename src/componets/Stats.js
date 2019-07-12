import React, { Component } from "react";
import {
    Collection,
    CollectionItem
} from 'react-materialize';
import NewInkyTweetForm from './NewInkyTweetForm'

class Stats extends Component {
    render() {
        let subsList = <div>No subs</div>;
        if (this.props.user.subscriptions.length > 0) {
            subsList = this.props.user.subscriptions.map( (sub, i) => { 
                return (<CollectionItem key={i}> {sub}  </CollectionItem>)});
        }

        return (
            <div>
                <div>
                    <h3>{this.props.user.handle}</h3>
                    <img src={this.props.user.pic} alt='profile_pic' />
                    <NewInkyTweetForm 
                        user={this.props.user}
                        updateUser={this.props.updateUser} />
                    <h5>Reputation: {this.props.user.reputation}</h5>
                </div>
                <Collection header='Subscriptions'>
                    { subsList }
                </Collection>
            </div>
        );
    }
}

export default Stats;

