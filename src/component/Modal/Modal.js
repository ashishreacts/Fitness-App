import React, { useEffect, useState } from "react";
import "./Modal.css";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    gender: "",
    inquiry: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const dataInputChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const dataChangeHandler = (e) => {
    e.preventDefault();
    setData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      gender: "",
      inquiry: "",
    });
    closeModal();
  };

  return (
    <>
      {showModal && (
        <>
          <div className="modal-wrapper" onClick={closeModal}></div>
          <div className="modal-container">
            <form onSubmit={dataChangeHandler}>
              <h2 className="modal-h2">Inquiry Form</h2>
              <label htmlFor="name" className="name">
                First Name
              </label>
              <input
                className="modal-text"
                name="firstName"
                type="text"
                placeholder="first name"
                value={data.firstName}
                onChange={dataInputChangeHandler}
              />

              <label htmlFor="name" className="name">
                Last Name
              </label>
              <input
                className="modal-text"
                name="lastName"
                type="text"
                placeholder="last name"
                value={data.lastName}
                onChange={dataInputChangeHandler}
              />
              <br />

              <label htmlFor="email" className="name">
                Email
              </label>
              <input
                className="modal-text"
                name="email"
                type="email"
                placeholder="email"
                value={data.email}
                onChange={dataInputChangeHandler}
              />

              <label htmlFor="number" className="name">
                Contact Number
              </label>
              <input
                className="modal-text"
                type="tel"
                name="contactNumber"
                placeholder="contact number"
                value={data.contactNumber}
                onChange={dataInputChangeHandler}
              />
              <br />
              <label htmlFor="gender" className="name">
                Gender:
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={data.gender === "male"}
                  onChange={dataInputChangeHandler}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={data.gender === "female"}
                  onChange={dataInputChangeHandler}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={data.gender === "other"}
                  onChange={dataInputChangeHandler}
                />
                Other
              </label>
              <br />
              <label htmlFor="inquiry" className="name">
                What can we do for you?
              </label>
              <br />

              <textarea
                name="inquiry"
                cols="30"
                rows="5"
                value={data.inquiry}
                onChange={dataInputChangeHandler}
              ></textarea>
              <br />
              <button type="submit" className="modal-btn" onClick={closeModal}>
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};
export default Modal;
