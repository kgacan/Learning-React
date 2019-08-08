import React, { Component } from 'react';
//import axios from 'axios';
import {firebase, firebaseArticles, firebaseLooper} from '../../../firebase'; 

import SliderTemplates from './slider_templates';
//import { URL } from '../../../config';

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){

        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot)=>{
            const news = firebaseLooper(snapshot);
            news.forEach((item, i)=>{
                // firebase.storage().ref('images')
                // .child(item.image).getDownloadURL()
                // .then(url => {
                //     news[i].image = url;
                //     this.setState({
                //         news
                //     })
                // })

                const asyncFunction = (item, i, cb) => {
                    firebase.storage().ref('images')
                        .child(item.image).getDownloadURL()
                        .then(url => {
                            news[i].image = url;
                            cb();
                        })
                }

                let request = news.map((item, i)=>{
                    return new Promise((resolve)=>{
                        asyncFunction(item, i, resolve)
                    })
                })

                Promise.all(request).then(()=>{
                    this.setState({
                        news
                    })
                })
            })
            
        })

        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then( response => {
        //     this.setState({
        //         news:response.data 
        //     })
        // })
    }

    render(){
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }

}

export default NewsSlider;