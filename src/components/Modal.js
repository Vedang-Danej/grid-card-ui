import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { validate } from 'email-validator';
const Modal = ({
  setModalOpen,
  modalOpen,
  name,
  email,
  phone,
  website,
  setName,
  setEmail,
  setWebsite,
  setPhone,
  handleSave,
}) => {
  return (
    <div className={modalOpen ? 'modal-container' : 'hidden'}>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Basic Modal</div>
            <button aria-label="Close" className="modal-close">
              <CloseOutlined style={{ fontSize: '16px' }} onClick={() => setModalOpen(false)} />
            </button>
          </div>
          <div className="modal-body">
            <form className="form">
              <div className="form-item">
                <div className="label">
                  <label className="required ">Name </label>
                </div>
                <span className="input">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className={name === '' ? 'has-error' : ''}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  {name === '' ? <div className="form-explain">This field is required</div> : ''}
                </span>
              </div>
              <div className="form-item">
                <div className="label">
                  <label className="required ">Email </label>
                </div>
                <span className="input">
                  <input
                    type="text"
                    id="email"
                    value={email}
                    className={email === '' ? 'has-error' : ''}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {email === '' ? <div className="form-explain">This field is required</div> : ''}
                  {email !== '' && validate(email) === false ? (
                    <div className="form-explain">Invalid Email</div>
                  ) : (
                    ''
                  )}
                </span>
              </div>
              <div className="form-item">
                <div className="label">
                  <label className="required ">Phone </label>
                </div>
                <span className="input">
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    className={phone === '' ? 'has-error' : ''}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                  {phone === '' ? <div className="form-explain">This field is required</div> : ''}
                </span>
              </div>
              <div className="form-item">
                <div className="label">
                  <label className="required ">Website </label>
                </div>
                <span className="input">
                  <input
                    type="text"
                    id="name"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className={website === '' ? 'has-error' : ''}
                  ></input>
                  {website === '' ? <div className="form-explain">This field is required</div> : ''}
                </span>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="form-btn" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button className="form-btn form-btn-primary" onClick={handleSave}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
