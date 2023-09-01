import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const styles = {
    card: {
      backgroundColor: '#eee',
      borderRadius: 10,
      padding: '.75rem',
      width: '18rem',
    },
  };
  return (
    <>
      <h1 className="py-3">User Profile</h1>
      <div style={styles.card}>
        <h2 className="pb-3">{user.name}</h2>
        <div className="d-flex"><h5>UserId:</h5> <p className="ps-3">{user.id}</p></div>
        <div className="d-flex"><h5>Status:</h5> {user.isSeller ? <p className="ps-3">Seller</p> : <p className="ps-3">Customer</p>}</div>
      </div>
    </>
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
