import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/profile');
      setProfile(response.data);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>{profile.username}'s Profile</h1>
      <p>{profile.bio}</p>
      {/* Additional profile details */}
    </div>
  );
};

export default Profile;
