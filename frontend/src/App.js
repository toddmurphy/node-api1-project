import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" render={props => <UserList {...props} />} />
      <Route exact path="/CreateUser" render={props => <CreateUser {...props} />} />
      <Route exact path="/EditUser/:id" render={props => <EditUser {...props} />} />
    </div>
  );
}

export default App;
