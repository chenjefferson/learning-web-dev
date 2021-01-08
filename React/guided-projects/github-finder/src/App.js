import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar icon={faGithub} title={'GitHub Finder'} />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => {
                  return (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0}
                        setAlert={this.setAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  );
                }}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
