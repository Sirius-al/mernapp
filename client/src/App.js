import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import reducers from './Reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { loadUser } from './Actions/authAction'
import tokenAuth from './utils/AuthToken';
import PrivateRoute from './components/routing/PrivateRoute'

import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Alert from './components/layouts/Alert'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfileForm from './components/profile-form/CreateProfileForm'
import EditProfileForm from './components/profile-form/EditProfileForm'
import AddExperience from './components/profile-form/AddExperience'
import Profiles from './components/profiles/Profiles'
import AddEducation from './components/profile-form/AddEducation'
import Profile from './components/profile/Profile'
// import Spinner from './components/layouts/Spinner'

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = createStore(reducers, initialState, compose(applyMiddleware(thunk), composeEnhancer))



const App = () => {

    useEffect(() => {
        return Store.dispatch(loadUser())
    }, [])
    // console.log(Stor
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route exact path='/' component={Landing}/>
                    <div className="container">
                        <Alert />
                        <Switch>
                            <Route path='/register' component={Register}/>
                            <Route path='/login' component={Login}/> 
                            <Route path='/profiles' component={Profiles}/> 
                            <Route path='/profile/:id' component={Profile}/>
                            <PrivateRoute path='/dashboard' component={Dashboard}/>
                            <PrivateRoute path='/create-profile' component={CreateProfileForm}/> 
                            <PrivateRoute path='/edit-profile' component={EditProfileForm}/>
                            <PrivateRoute path='/add-experience' component={AddExperience}/>
                            <PrivateRoute path='/add-education' component={AddEducation}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
    </Provider>
    );
}

export default App;
