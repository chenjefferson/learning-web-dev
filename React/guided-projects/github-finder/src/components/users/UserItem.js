import React from 'react';
import Navbar from '../layout/Navbar';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UserItem;
