import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Profiles from './components/profileLists';
import AddProfile from './components/addProfile';
import ProfileDetails from './components/profileDetails';
import UpdateProfile from './components/updateProfile';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Profiles />
                    </Route>
                    <Route path="/add" component={AddProfile}>
                    </Route>
                    <Route path="/update" component={UpdateProfile}>
                    </Route>
                    <Route path="/details" component={ProfileDetails}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;