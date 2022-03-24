import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password, err => {
      if (err && err.reason === 'User not found') {
        Accounts.createUser({
          email: email,
          password: password,
        });
      }
    });
  };

  return (
    <form onSubmit={submit} className="login-form">
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