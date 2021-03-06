import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import Table from '../../components/Table';
import './componet.css';
import history from '../../utils/history';

const Users = ({ users, loadUsers }) => {
  useEffect(() => {
    loadUsers();
  }, []);

  const navigateToUser = id => {
    history.push(`/user/${id}`);
  };
  return (
    <div>
      <Table
        items={users}
        renderRow={user => (
          <tr key={user.id} onClick={() => navigateToUser(user.id)}>
            <td>{startCase(user.login)}</td>
            <td>{startCase(user.type)}</td>
            <td>
              <img src={user.avatar_url} alt={user.avatar_url} />
            </td>
          </tr>
        )}
        renderHeader={() => (
          <tr>
            <th>Login</th>
            <th>Type</th>
            <th>Avatar</th>
          </tr>
        )}
        renderMessage="No records found"
      />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
    }),
  ),
  loadUsers: PropTypes.func,
};

export default Users;
