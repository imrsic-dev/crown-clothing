import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      } else {
        console.log("User creation encountered an error, ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign Up with Your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
