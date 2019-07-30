import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './components/hoc/Layout/layout';

import NewsArticles from './components/Articles/News/Post/index';
import VideosArticles from './components/Articles/Videos/Video/index';
import MainNews from './components/Articles/News/Main/index';
import VideosNews from './components/Articles/Videos/VideosNews/videosNews';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component ={MainNews}/>
                    <Route path="/videos" exact component = {VideosNews}/>
                    <Route path="/articles/:id" exact component={NewsArticles}/>
                    <Route path="/videos/:id" exact component={VideosArticles}/>
                </Switch>
            </Layout>

        );
    }
}

export default Routes;