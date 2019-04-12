
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './Login';



export class Signout extends Component {

    render() {

        const user = this.props.userData;

        return (

            <div>
                <Router>
                <h3> Welcome {user.Name}</h3>
                    <Link onClick={() => this.props.signout()}>
                        <Link to='./signout' className="App-link"> Signout</Link>
                        <Route exact path="./signout" component={Login} />
                    </Link>
                </Router>
            </div>
        )
    }
}

export default Signout;



