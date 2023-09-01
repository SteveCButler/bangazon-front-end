import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  console.warn('USER: ', user);
  return (
    <div>
      <h3>User Profile</h3>
      <h4>{user.name}</h4>
      <h5>UserId: {user.id}</h5>
      <h5>Status: {user.isSeller ? <h5>Seller</h5> : <h5>Customer</h5>}</h5>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // user: PropTypes.shape({
  //   productName: PropTypes.string,
  //   productDescription: PropTypes.string,
  //   productPrice: PropTypes.number,
  //   sellerId: PropTypes.number,
  //   productTypeId: PropTypes.number,
  //   productTypeName: PropTypes.string,
  // }).isRequired,
};
