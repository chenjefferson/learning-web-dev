import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  // search GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    // console.log(text);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar icon={faGithub} title={'GitHub Finder'} />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
