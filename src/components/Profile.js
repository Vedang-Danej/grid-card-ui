import React, { useState } from 'react';
import {
  HeartOutlined,
  EditOutlined,
  HeartFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  DeleteFilled,
} from '@ant-design/icons';
import avatar from '../static/avatar.png';

const Profile = ({
  profile,
  setModalOpen,
  modalOpen,
  setId,
  setName,
  setEmail,
  setWebsite,
  setPhone,
  handleDelete,
}) => {
  // to fill the heart shaped icon in card actions
  const [filled, setFilled] = useState(true);

  const handleEditClick = () => {
    setModalOpen(!modalOpen);
    setId(profile.id);
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
    setWebsite(profile.website);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="card-body">
        <h3 className="name">{profile.name}</h3>

        <ul className="card-list">
          <div>
            <MailOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: '10px' }}>{profile.email}</p>
          </div>
          <div>
            <PhoneOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: '10px' }}>{profile.phone}</p>
          </div>
          <div>
            <GlobalOutlined style={{ fontSize: '18px' }} />
            <p style={{ marginLeft: '10px' }}>{profile.website}</p>
          </div>
        </ul>
      </div>
      <ul className="card-actions">
        <li>
          <button className="action-button" onClick={() => setFilled(!filled)}>
            {filled ? (
              <HeartOutlined style={{ fontSize: '20px', color: 'red' }} />
            ) : (
              <HeartFilled style={{ fontSize: '20px', color: 'red' }} />
            )}
          </button>
        </li>
        <li>
          <button className="action-button">
            <EditOutlined
              style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 0.45)' }}
              onClick={handleEditClick}
            />
          </button>
        </li>
        <li>
          <button className="action-button">
            <DeleteFilled
              style={{ fontSize: '18px', color: 'rgba(0, 0, 0, 0.45)' }}
              onClick={() => handleDelete(profile.id)}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
