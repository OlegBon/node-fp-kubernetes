import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Users from './pages/Users';
import Logout from './pages/Logout';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/logout" component={Logout} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;
