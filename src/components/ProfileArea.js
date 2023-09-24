import React, { useState, useEffect } from 'react';
import { Avatar, StyledButton } from '../assets/styles.js'; 
import defaultProfileImage from '../assets/images/default-profile-image.png';

const ProfileArea = ({ user }) => {
  // State to hold the user data
  const [userData, setUserData] = useState(user);

  // useEffect to update the user data when the user prop changes (i.e., when a user logs in)
  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div className="profile-area" style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={userData ? userData.photoURL || defaultProfileImage : defaultProfileImage} alt="User Avatar" size="48px" marginRight="10px" />
      <>
        {userData ? (
          <span>Welcome, {userData.displayName}</span>
        ) : (
          <>
            <span>Welcome</span>
            <StyledButton>Login Here</StyledButton>
          </>
        )}
      </>
      {/* You can add any other profile-related content here */}
    </div>
  );
};

export default ProfileArea;
