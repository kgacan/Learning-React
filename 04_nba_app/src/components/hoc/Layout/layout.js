import React, {Component} from 'react';
import './layout.css';

import Header from '../../Header/header';
import Footer from '../../Footer/footer';

class Layout extends Component{

    state={
        showNav:false
    }

    toggleSidenav = (action)=>{
        this.setState({
            showNav:action
        })
    }


    render(){
        return(
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={this.toggleSidenav.bind(false)}
                    onOpenNav={this.toggleSidenav.bind(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;