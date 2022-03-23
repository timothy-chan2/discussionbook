import React from 'react';

export const Comment = ({ comment }) => {
  return (
    <section>
      <header>{comment.user}</header>
      <p>{comment.text}</p>
    </section>
  );
};