import React from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';

import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index'
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import signIn from './components/SignIn/signin';
import Dashboard from './components/Dashboard/dashboard';

import PrivateRouts from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes = (props) => {

        return(
            <Layout user ={props.user}>
                <Switch>
                    <PublicRoutes {...props} restricted={true} path="/" exact component={Home}/>
                    <PublicRoutes {...props} restricted={true} path="/news" exact component={NewsMain}/>
                    <PublicRoutes {...props} restricted={true} path="/articles/:id" exact component={NewsArticle}/>
                    <PublicRoutes {...props} restricted={true} path="/videos/:id" exact component={VideoArticle}/>
                    <PublicRoutes {...props} restricted={true} path="/videos" exact component={VideosMain}/>
                    <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={signIn}/>
                    <PrivateRouts {...props} path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </Layout>
           
        )
}

export default Routes;