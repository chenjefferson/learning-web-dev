import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar icon={faGithub} title={'GitHub Finder'} />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
