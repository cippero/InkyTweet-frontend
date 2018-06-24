import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    // Icon,
    Row,
    Input,
} from 'react-materialize'
// const SERVER_URL = 'https://inkytweet.herokuapp.com';
const SERVER_URL = 'http://localhost:8080';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : ''
        }
    }

    handleChange = (e, val) => { this.props.filter(val); }

    componentDidMount = () => { this.setState({ userName : this.props.user.handle }); }

    render() {
        let buttons =   <Row>
                            <Input onChange={(e, val) => this.handleChange(e, val)} s={4} placeholder='Search...'/>
                            <NavItem s={4} href='/browse'>Browse</NavItem>
                            <NavItem s={4} href={SERVER_URL + '/auth/login'}>Twitter Login</NavItem>
                        </Row>
        if (this.props.user.handle !== '') {
            buttons =   <Row>
                            <Input onChange={(e, val) => this.handleChange(e, val)} s={4} placeholder='Search...'/>
                            <NavItem s={4} href='/browse'>Browse</NavItem>
                            <NavItem s={4} href={`/user/${this.props.user.handle}`}>{this.props.user.handle}</NavItem>
                            <NavItem s={4} href={SERVER_URL + '/auth/logout'}>Logout</NavItem>
                        </Row>
        }
        return (
            <div>
                <Navbar brand='InkyTweet' right>
                    {buttons}
                </Navbar>
            </div>
                )
            }
        }
        
        
export default Header;