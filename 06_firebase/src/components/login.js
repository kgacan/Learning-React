import React, { Component } from 'react';
import { firebase, googleAuth} from '../firebase';

class Login extends Component {

    state={
        status:false
    }

    singIn = () => {
        firebase.auth().signInWithPopup(googleAuth);
    }
    signOut = () =>{
        firebase.auth().signOut(); 
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            this.setState( {
                status: user ? false : true
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status ?
                    <button onClick={this.singIn}>Login</button>
                    :
                    <button onClick={this.signOut}>Logout</button>  
                }
            </div>
        );
    }
}

export default Login;