import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Alert from './components/layouts/Alert'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path='/' component={Landing}/>
                <div className="container">
                    <Alert />
                    <Switch>
                        <Route path='/register' component={Register}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
