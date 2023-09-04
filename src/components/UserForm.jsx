import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { addUser } from '../store/userSlice';

export const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      formIsValid = false;
      errors['firstName'] = 'First name cannot be empty';
    }

    if (!formData.lastName) {
      formIsValid = false;
      errors['lastName'] = 'Last name cannot be empty';
    }

    if (!validator.isEmail(formData.email)) {
      formIsValid = false;
      errors['email'] = 'Email is not valid';
    }

    if (formData.message.length < 30) {
      formIsValid = false;
      errors['message'] = 'Message must be at least 30 characters';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(addUser(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <span>{formErrors.firstName}</span>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <span>{formErrors.lastName}</span>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{formErrors.email}</span>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span>{formErrors.message}</span>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};