import React, { Component } from "react";
import { Row, Col } from 'react-materialize';
import '../Profile.css';
import Stats from './Stats';
import Users from './Users';

class Browse extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col s={2} > 
                            <Stats
                                updateUser={this.props.updateUser}
                                user={this.props.user} />
                        </Col>
                        <Users user={this.props.user}
                            updateUser={this.props.updateUser}
                            query={this.props.query} />
                    </Row>
                </div>
            </div>
        );
    }
}

export default Browse;