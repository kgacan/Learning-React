import React, { Component } from 'react';
import '../css/App.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Slide extends Component{
    state = {
        items:[]
    }
    
    addElements () {
        return this.state.items.map((item,i) => (
            <CSSTransition
                classNames="item"
                timeout={5000}
                key={i}
                onEntered={(node)=>{
                    node.classList.add("active")
                }}
            >
                <div className="item" key={i}>{item}</div>
            </CSSTransition>
        ));
    }

    generateNumber(){
        //let random = Math.floor(Math.random() * 100) + 1;
        let newArray = [...this.state.items,Math.floor(Math.random() * 100) + 1]

        this.setState({
            items:newArray
        })
    }

    removeNumber(){
        let newArray = this.state.items.slice(0,-1);
        this.setState({
            items:newArray
        })
    }

    render(){
        return(
            <div>
                <TransitionGroup
                component="div"
                classNames="list"
                >
                    {this.addElements()}
                </TransitionGroup>

             
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;