import React, { useState } from 'react';
import profilesData from '../utils/data';
import Profile from '../components/Profile';
import Modal from '../components/Modal';
import { validate } from 'email-validator';

const HomeScreen = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const handleSave = () => {
    // data validation
    if (
      name === '' ||
      email === '' ||
      validate(email) === false ||
      phone === '' ||
      website === ''
    ) {
      // The demo application does not handle failed data validation.
      console.log('validation failed');
    } else {
      // replacing the old profile with the new one.
      const newProfile = { id, name, email, phone, website };
      let newProfiles = profiles;
      const index = newProfiles.findIndex((profile) => profile.id === id);
      newProfiles[index] = newProfile;
      setProfiles(newProfiles);
      setModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    // filtering the deleted profile out
    let newProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(newProfiles);
  };

  return (
    <div className="container">
      {profiles.map((profile) => (
        <Profile
          profile={profile}
          key={profile.id}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          setId={setId}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setWebsite={setWebsite}
          handleDelete={handleDelete}
        />
      ))}
      <Modal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        id={id}
        name={name}
        email={email}
        phone={phone}
        website={website}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setWebsite={setWebsite}
        handleSave={handleSave}
      />
    </div>
  );
};

export default HomeScreen;
