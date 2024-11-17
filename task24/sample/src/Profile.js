import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, location, profilePicture, bio }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <div className="profile-details">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-location">{location}</p>
        {bio && <p className="profile-bio">{bio}</p>}
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  bio: PropTypes.string,
};

Profile.defaultProps = {
  bio: 'No bio available',
};

export default Profile;
