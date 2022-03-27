import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

// The form to create/log in into the application
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const submit = e => {
    e.preventDefault();
    setLoginError('');

    Meteor.loginWithPassword(email, password, err => {
      if (err && err.reason === 'User not found') {
        Accounts.createUser({
          email: email,
          password: password,
        });
      } else if (err && err.reason === 'Incorrect password') {
        setLoginError(`🔥 ${err.reason} 🔥`);
      }
    });
  };

  return (
    <form onSubmit={submit} className="login-form">
      {loginError &&
        <div>
          <p>{loginError}</p>
        </div>
      }

      <div>
        <div>
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            placeholder="example@email.ca"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};