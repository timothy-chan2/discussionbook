import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(email, password);
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="email">E-mail</label>

      <input
        type="text"
        placeholder="example@email.ca"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
    </form>
  );
};