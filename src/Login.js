import React, { Component } from "react";
import Signout from "./signout";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            user: { Name: "", passWord: "" },
            display: false,
            dontdisplay: true
        };

    }

    UpdateState(ctrl, value) {
        const { user } = this.state;
        user[ctrl] = value;
        this.setState({ user });
    }


    Submit(e) {
        e.preventDefault();

        this.setState({ display: true });

        this.setState({ dontdisplay: false });

    }

    resetState() {
        this.setState(
            {
                user: { Name: '', passWord: '', },
                display: false,
                dontdisplay: true,

            }
        )
    }


    render() {

        const { user } = this.state;
        return (
            <div >
                {this.state.dontdisplay ?

                    (<form  className="Form" onSubmit={e => this.Submit(e)}>

                        <h4>Sign in</h4>

                        <label>Username :</label>
                        <input type="text" placeholder="Enter your Username" value={user.Name}
                            onChange={e => this.UpdateState("Name", e.currentTarget.value)} />

                        <br />

                        <label>Password :</label>
                        <input type="password" placeholder="Enter password" value={user.passWord}
                            onChange={e => this.UpdateState("passWord", e.currentTarget.value)} />

                        <button type="submit"> Login </button>

                    </form>) : null}
                {this.state.display ? <Signout userData={this.state.user} signout={(e) => this.resetState()} /> : null}

            </div>

        );

    }

}

export default Login;




